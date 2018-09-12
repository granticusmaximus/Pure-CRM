using System;
using System.ComponentModel.DataAnnotations;

namespace TriumphCrm.Models.ViewModels
{
    public class ProjectViewModel
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
    }
}
