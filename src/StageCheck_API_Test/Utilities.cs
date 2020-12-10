using StageCheck_API.Data;
using StageCheck_API.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace StageCheck_API_Test
{
    public static class Utilities
    {
        public static void InitializeDbForTests(StageCheckContext db)
        {
            db.Internships.AddRange(GetSeedingInternships());

            db.SaveChanges();
        }

        public static void ReinitializeDbForTests(StageCheckContext db)
        {
            db.Internships.RemoveRange(db.Internships);
            InitializeDbForTests(db);
        }
        public static List<Internship> GetSeedingInternships()
        {
            return new List<Internship>()
            {
             new Internship(){ Id = 1, Title = "ICT hbo afstudeerstage", Description = "Hele leuke en uitdagende afstudeeropdracht" },
             new Internship(){ Id = 2, Title = "Bedrijfskunde hbo 2e jaars stage", Description = "2 stageplekken vrij" },
             new Internship(){ Id = 3, Title = "ICT hbo stage 2e jaars", Description = "Uitdagende stageopdracht" }
            };
        }
    }
}
