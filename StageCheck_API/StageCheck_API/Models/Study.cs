﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace StageCheck_API.Models
{
    public class Study
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }

        public ICollection<Internship> internships { get; set; }
    }
}
