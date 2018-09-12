using System;
using System.ComponentModel.DataAnnotations;
using System.Data.Entity;

namespace TriumphCrm.Models
{
    public class Project
    {
        [Key]
        public int PID { get; set; }

        [Required]
        [Display(Name = "Project Name:")]
        public string ProjectName { get; set; }

        [Required]
        [Display(Name = "Start Date:")]
        public DateTime StartDate { get; set; }

        [Required]
        [Display(Name = "Due Date:")]
        public DateTime DueDate { get; set; }

        [Required]
        [Display(Name = "Assigned to Whom:")]
        public int AssignedEmp { get; set; }

        [Required]
        public int UID { get; set; }

        [Required]
        [Display(Name = "Attribute:")]
        public string Attribute { get; set; }

        [Required]
        [Display(Name = "Priority:")]
        public string Priority { get; set; }

        [Required]
        [Display(Name = "Project Notes:")]
        public string ProjectNotes { get; set; }

        public class ClientsDBContext : DbContext
        {
            public DbSet<Project> Projects { get; set; }
        }
    }
}
