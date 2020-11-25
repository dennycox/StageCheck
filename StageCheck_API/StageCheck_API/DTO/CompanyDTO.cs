using StageCheck_API.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace StageCheck_API.DTO
{
    public class CompanyDTO
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string StreetName { get; set; }
        public int HouseNumber { get; set; }
        public string HouseNumberAddition { get; set; }
        public string ZipCode { get; set; }
        public string City { get; set; }
        public string WebSite { get; set; }
        public string PhoneNumber { get; set; }
    }
}
