﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace StageCheck_API.Models
{
    public class Internship
    {
        [Key]
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public int StudyId { get; set; }
        public int CompanyId { get; set; }
    }
}
