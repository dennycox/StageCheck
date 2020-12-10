using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StageCheck_MVC_app.Models
{
    public class Company
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string StreetName { get; set; }
        public int HouseNumber { get; set; }
        public string HouseNumberAddition { get; set; }
        public string ZipCode { get; set; }
        public string City { get; set; }
        public string Website { get; set; }
        public string PhoneNumber { get; set; }
    }
}
