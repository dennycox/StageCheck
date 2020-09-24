using StageCheck_API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StageCheck_API.Data
{
    public class DbInitializer
    {
        public static void Initialize(StageCheckContext context)
        {
            context.Database.EnsureCreated();

            if (context.Internships.Any())
            {
                return;
            }

            var internships = new Internship[]
            {
                new Internship{Title="ICT hbo afstudeerstage",
                    Description="Hele leuke en uitdagende stageopdracht", CompanyId="1",
                }
            };
            foreach (Internship i in internships)
            {
                context.Internships.Add(i);
            }
            context.SaveChanges();
        }
    }
}
