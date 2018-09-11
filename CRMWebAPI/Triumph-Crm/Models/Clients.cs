using System;
using System.ComponentModel.DataAnnotations;
using System.Data.Entity;

namespace TriumphCrm.Models
{
    public class Clients
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

        [Required]
        [Display(Name = "Company Address:")]
        public string Address { get; set; }

        [Required]
        [Display(Name = "City:")]
        public string City { get; set; }

        [Required]
        [Display(Name = "State:")]
        public string State { get; set; }

        [Required]
        [Display(Name = "Zip:")]
        public string Zip { get; set; }

        [Required]
        [Display(Name = "Date of Invoice Reminder:")]
        public DateTime InvoiceDate { get; set; }

        [Required]
        [Display(Name = "Notes:")]
        public string Notes { get; set; }

        public class ClientsDBContext : DbContext
        {
            public DbSet<Clients> Client { get; set; }
        }
    }
}
