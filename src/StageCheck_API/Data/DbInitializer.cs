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
                    Description="Uitdagende stageopdracht beschikbaar, indien interesse neem contact op",
                    StudyId=1,
                    CompanyId=2,
                },

                new Internship{Title="ICT hbo afstudeerstage",
                    Description="Hele leuke en uitdagende afstudeeropdracht, reageer snel want we hebben maar plaats voor een student",
                    StudyId=2,
                    CompanyId=1,
                },

                new Internship{Title="Bedrijfskunde hbo 2e jaars stage",
                    Description="2 stageplekken vrij, wij zoeken een enthousiaste student die veel wil leren. Neem contact op voor meer informatie",
                    StudyId=3,
                    CompanyId=3,
                },

                new Internship{Title="Applied Science hbo afstudeerstage",
                    Description="3 Uitdagende stageplek beschikbaar, voor meer informatie neem contact met ons op",
                    StudyId=4,
                    CompanyId=4,
                },

                new Internship{Title="hbo software stage",
                    Description="Leerzame stageplek beschikbaar, neem snel contact op voor meer informatie als je geïnteresseerd bent",
                    StudyId=2,
                    CompanyId=5,
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
                    PhoneNumber="+31736157777"},

                new Company{Name="Etemf B.V.",
                    StreetName="Simon De Cockstraat",
                    HouseNumber=4,
                    HouseNumberAddition=null,
                    ZipCode="5048 AW",
                    City="Tilburg",
                    WebSite="www.etemf.nl",
                    PhoneNumber="+31135424372"},

                new Company{Name="RUG Fac. Econ.& Bedrijfskunde vakgroep IM&S",
                    StreetName="Nettelbosje",
                    HouseNumber=2,
                    HouseNumberAddition=null,
                    ZipCode="9747 AE",
                    City="Groningen",
                    WebSite="www.rug.nl/feb/",
                    PhoneNumber="+31503633453"},

                new Company{Name="HZ University of Applied Sciences",
                    StreetName="Het Groene Woud",
                    HouseNumber=1,
                    HouseNumberAddition=null,
                    ZipCode="4331 NB",
                    City="Middelburg",
                    WebSite="www.hz.nl",
                    PhoneNumber="+31118489000"},

                new Company{Name="Philips Software Concepts",
                    StreetName="High Tech Campus",
                    HouseNumber=34,
                    HouseNumberAddition=null,
                    ZipCode="5656 AE",
                    City="Eindhoven",
                    WebSite="www.hrn.philips.com/cv",
                    PhoneNumber="+31611520501"},
            };
            foreach (Company c in companies)
            {
                context.Companies.Add(c);
            }

            context.SaveChanges();
        }
    }
}
