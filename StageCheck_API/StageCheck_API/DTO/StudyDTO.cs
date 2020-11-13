using StageCheck_API.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace StageCheck_API.DTO
{
    public class StudyDTO
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }

        public ICollection<Internship> Internships { get; set; }
    }
}
