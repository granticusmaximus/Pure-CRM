using System;
using System.ComponentModel.DataAnnotations;
using System.Data.Entity;

namespace TriumphCrm.Models
{
    public class Users
    {
        internal readonly string username;

        [Key]
        public string UID { get; set; }

        [Required]
        [Display(Name = "Username:")]
        public string Username { get; set; }

        [Required]
        [Display(Name = "Email:")]
        public string Email { get; set; }

        [Required]
        [DataType(DataType.Password)]
        [Display(Name = "Password:")]
        public string Password { get; set; }

        [Required]
        [DataType(DataType.Password)]
        [Display(Name = "ConfirmPassword:")]
        public string PasswordConfirm { get; set; }

        [Required]
        [Display(Name = "First Name:")]
        public string FName { get; set; }

        [Required]
        [Display(Name = "Last Name:")]
        public string LName { get; set; }

        public DateTime createdat { get; set; }

        public DateTime updatedat { get; set; }

        public bool isAdmin { get; set; }

        public class UsersDBContext : DbContext
        {
            public DbSet<Users> User { get; set; }
        }
    }
}
