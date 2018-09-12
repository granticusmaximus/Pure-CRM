using System;
using System.ComponentModel.DataAnnotations;

namespace TriumphCrm.Models.ViewModels
{
    public class UserViewModel
    {
        public string UID { get; set; }
        public string Username { get; set; }

        [DataType(DataType.Password)]
        public string Password { get; set; }

        [Display(Name = "First Name:")]
        public string FName { get; set; }

        [Display(Name = "Last Name:")]
        public string LName { get; set; }

        public bool ShowUID => !string.IsNullOrEmpty(UID);
    }
}
