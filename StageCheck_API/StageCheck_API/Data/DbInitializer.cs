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
                    Description="Hele leuke en uitdagende afstudeeropdracht",
                },

                new Internship{Title="Bedrijfskunde hbo 2e jaars stage",
                    Description="2 stageplekken vrij",
                },

                new Internship{Title="ICT hbo stage 2e jaars",
                    Description="Uitdagende stageopdracht",
                },

                new Internship{Title="Verpleegkunde hbo afstudeerstage",
                    Description="Uitdagende stageplek beschikbaar",
                },
            };
            foreach (Internship i in internships)
            {
                context.Internships.Add(i);
            }
            context.SaveChanges();
        }
    }
}
