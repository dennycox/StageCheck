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
                new Internship{Title="Mechatronica hbo stage 2e jaars",
                    Description="Uitdagende stageopdracht",
                    StudyId=4,
                    CompanyId=1,
                },

                new Internship{Title="ICT hbo afstudeerstage",
                    Description="Hele leuke en uitdagende afstudeeropdracht",
                    StudyId=3,
                    CompanyId=1,
                },

                new Internship{Title="Bedrijfskunde hbo 2e jaars stage",
                    Description="2 stageplekken vrij",
                    StudyId=2,
                    CompanyId=1,
                },

                new Internship{Title="Applied Science hbo afstudeerstage",
                    Description="3 Uitdagende stageplek beschikbaar",
                    StudyId=1,
                    CompanyId=1,
                },
            };
            foreach (Internship i in internships)
            {
                context.Internships.Add(i);
            }

            context.SaveChanges();

            if (context.Studies.Any())
            {
                return;
            }

            var studies = new Study[]
            {
                new Study{Name="Mechatronica"},

                new Study{Name="ICT"},

                new Study{Name="Bedrijfskunde"},

                new Study{Name="Applied Science"},
            };
            foreach (Study s in studies)
            {
                context.Studies.Add(s);
            }

            context.SaveChanges();

            if (context.Companies.Any())
            {
                return;
            }

            var companies = new Company[]
            {
                new Company{Name="Rockstars IT",
                    StreetName="Lekkerbeetjesstraat",
                    HouseNumber=8,
                    HouseNumberAddition=null,
                    ZipCode="5211 AL",
                    City="'s-Hertogenbosch",
                    WebSite="www.teamrockstars.nl",
                    PhoneNumber="073 615 7777"},
            };
            foreach (Company c in companies)
            {
                context.Companies.Add(c);
            }

            context.SaveChanges();
        }
    }
}
