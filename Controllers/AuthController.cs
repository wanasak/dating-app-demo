using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using DatingApp.API.Data;
using DatingApp.API.DTO;
using DatingApp.API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace DatingApp.API.Controllers
{
    [Route("api/[controller]")]
    public class AuthController : Controller
    {
        private readonly IAuthRepository _authRepository;
        private readonly IConfiguration _config;
        private readonly IMapper _mapper;
        public AuthController(IAuthRepository authRepository, IConfiguration config, IMapper mapper)
        {
            _mapper = mapper;
            _config = config;
            _authRepository = authRepository;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody]UserRegisterDTO userForRegisterDTO)
        {
            userForRegisterDTO.Username = userForRegisterDTO.Username.ToLower();

            if (await _authRepository.UserExist(userForRegisterDTO.Username))
                ModelState.AddModelError("Username", "Username is already exist");

            if (!ModelState.IsValid) return BadRequest(ModelState);

            var userToCreate = _mapper.Map<User>(userForRegisterDTO);

            var createdUser = await _authRepository.Register(userToCreate, userForRegisterDTO.Password);

            // return StatusCode(201);

            var userToReturn = _mapper.Map<UserRegisterDTO>(createdUser);
            return CreatedAtRoute("GetUser", new { controller = "Users", id = createdUser.Id }, userToReturn);
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody]UserLoginDTO userForLoginDTO)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);

            var userFromRepo = await _authRepository.Login(userForLoginDTO.Username.ToLower(), userForLoginDTO.Password);

            if (userFromRepo == null) return Unauthorized();

            // generate token
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_config.GetSection("AppSettings:Token").Value);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new System.Security.Claims.ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.NameIdentifier, userFromRepo.Id.ToString()),
                    new Claim(ClaimTypes.Name, userFromRepo.Username)
                }),
                Expires = DateTime.Now.AddDays(1),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key),
                SecurityAlgorithms.HmacSha512Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            var tokenString = tokenHandler.WriteToken(token);

            var user = _mapper.Map<UserForListDTO>(userFromRepo);

            return Ok(new { tokenString, user });
        }
    }
}