using System;
using System.ComponentModel.DataAnnotations;

namespace TriumphCrm.Models.ViewModels
{
    public class ClientViewModel
    {
        [Key]
        public int CID { get; set; }

        [Required]
        [Display(Name = "Company Name:")]
        public string BusinessName { get; set; }

        [Required]
        [Display(Name = "Company Email:")]
        public string Email { get; set; }

        [Required]
        [Display(Name = "Company Telephone:")]
        public int Telephone { get; set; }
    }
}
