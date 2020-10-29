using System;
using System.Collections.Generic;
using System.Text;

namespace StageCheck_API_Test
{
    class Utilities
    {
        public static void InitializeDbForTests(StageCheckContext db)
        {
            db.Internships.AddRange(GetSeedingMessages());

            db.SaveChanges();
        }

        public static void ReinitializeDbForTests(StageCheckContext db)
        {
            db.Internships.RemoveRange(db.Internships);
            InitializeDbForTests(db);
        }
        public static List<NewsArticle> GetSeedingMessages()
        {
            return new List<Internship>()
            {
             new Internship(){ ID = 1, Title = "ICT hbo afstudeerstage", Description = "Hele leuke en uitdagende afstudeeropdracht" },
             new Internship(){ ID = 2, Title = "Bedrijfskunde hbo 2e jaars stage", Description = "2 stageplekken vrij" },
             new Internship(){ ID = 3, Title = "ICT hbo stage 2e jaars", Description = "Uitdagende stageopdracht" }
            };
        }
    }
}
