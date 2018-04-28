using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using CloudinaryDotNet;
using CloudinaryDotNet.Actions;
using DatingApp.API.Data;
using DatingApp.API.DTO;
using DatingApp.API.Helpers;
using DatingApp.API.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

namespace DatingApp.API.Controllers
{
    [Authorize]
    [Route("api/users/{userId}/photos")]
    public class PhotosController : Controller
    {
        private readonly IDatingRepository _datingRepository;
        private readonly IMapper _mapper;
        private readonly IOptions<CloudinarySettings> _cloudinaryConfig;
        private readonly Cloudinary _cloudinary;

        public PhotosController(IMapper mapper, IDatingRepository datingRepository, IOptions<CloudinarySettings> cloudinaryConfig)
        {
            _cloudinaryConfig = cloudinaryConfig;
            _mapper = mapper;
            _datingRepository = datingRepository;

            Account account = new Account(_cloudinaryConfig.Value.CloudName, _cloudinaryConfig.Value.ApiKey, _cloudinaryConfig.Value.ApiSecret);

            _cloudinary = new Cloudinary(account);
        }

        [HttpGet("{id}", Name = "GetPhoto")]
        public async Task<IActionResult> GetPhoto(int id)
        {
            var photoFromRepo = await _datingRepository.GetPhoto(id);

            var photo = _mapper.Map<PhotoForReturnDTO>(photoFromRepo);

            return Ok(photo);
        }


        [HttpPost]
        public async Task<IActionResult> AddPhotoForUser(int userId, PhotoForCreateionDTO photoDTO)
        {
            var user = await _datingRepository.GetUser(userId);

            if (user == null) return BadRequest("Could not find user");

            var currentUserId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);

            if (userId != currentUserId) return Unauthorized();

            var file = photoDTO.File;

            var uploadResult = new ImageUploadResult();

            if (file.Length > 0)
            {
                using (var stream = file.OpenReadStream())
                {
                    var uploadParams = new ImageUploadParams
                    {
                        File = new FileDescription(file.Name, stream)
                    };
                    uploadResult = _cloudinary.Upload(uploadParams);
                }
            }

            photoDTO.Url = uploadResult.Uri.ToString();
            photoDTO.PublicId = uploadResult.PublicId;

            var photo = _mapper.Map<Photo>(photoDTO);
            photo.User = user;

            if (!user.Photos.Any(x => x.IsMain))
                photo.IsMain = true;

            user.Photos.Add(photo);

            if (await _datingRepository.SaveAllAsync())
            {
                var photoToReturn = _mapper.Map<PhotoForReturnDTO>(photo);
                return CreatedAtRoute("GetPhoto", new { id = photo.Id }, photoToReturn);
            }

            return BadRequest("Could not add the photo");
        }

        [HttpPost("{id}/setMain")]
        public async Task<IActionResult> SetMainPhoto(int id, int userId)
        {
            if (userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
                return Unauthorized();

            var photoFromRepo = await _datingRepository.GetPhoto(id);
            if (photoFromRepo == null)
                return NotFound();

            if (photoFromRepo.IsMain) return BadRequest("This photo already is the main");

            var currentMainPhoto = await _datingRepository.GetMainPhotoByUserId(userId);
            if (currentMainPhoto != null)
                currentMainPhoto.IsMain = false;

            photoFromRepo.IsMain = true;

            if (await _datingRepository.SaveAllAsync())
                return NoContent();

            return BadRequest("Could not set photo to main");
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePhoto(int userId, int id)
        {
            if (userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
                return Unauthorized();

            var photoFromRepo = await _datingRepository.GetPhoto(id);
            if (photoFromRepo == null)
                return NotFound();

            if (photoFromRepo.IsMain) return BadRequest("You cannot delete the main photo");

            var deletePatams = new DeletionParams(photoFromRepo.PublicId);

            if (photoFromRepo.PublicId != null)
            {
                var result = _cloudinary.Destroy(deletePatams);

                if (result.Result == "ok")
                    _datingRepository.Delete(photoFromRepo);
            }
            else
            {
                _datingRepository.Delete(photoFromRepo);
            }

            if (await _datingRepository.SaveAllAsync()) return Ok();

            return BadRequest("Failed to delete the photo");
        }
    }
}