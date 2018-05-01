using DatingApp.API.Models;
using Microsoft.EntityFrameworkCore;

namespace DatingApp.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Value> Values { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Photo> Photos { get; set; }
        public DbSet<Like> Likes { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Like>()
                .HasKey(k => new { k.LikerId, k.LikeeId });

            modelBuilder.Entity<Like>()
                .HasOne(x => x.Likee)
                .WithMany(x => x.Liker)
                .HasForeignKey(x => x.LikerId)
                .OnDelete(DeleteBehavior.Restrict);
                
            modelBuilder.Entity<Like>()
                .HasOne(x => x.Liker)
                .WithMany(x => x.Likee)
                .HasForeignKey(x => x.LikeeId)
                .OnDelete(DeleteBehavior.Restrict);

                
        }
    }
}