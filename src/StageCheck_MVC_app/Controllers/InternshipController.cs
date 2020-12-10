using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using StageCheck_MVC_app.Models;

namespace StageCheck_MVC_app.Controllers
{
    public class InternshipController : Controller
    {
        HttpClientHandler clientHandler = new HttpClientHandler();

        List<Internship> internships;

        public InternshipController()
        {
            clientHandler.ServerCertificateCustomValidationCallback = (sender, cert, chain, sslPolicyErrors) => { return true; };
        }

        public async Task<IActionResult> InternshipList()
        {
            internships = new List<Internship>();

            using (var httpClient = new HttpClient()) {
                using (var response = await httpClient.GetAsync("http://stagecheck_api:80/api/Internships"))
                {
                    string apiResponse = await response.Content.ReadAsStringAsync();
                    internships = JsonConvert.DeserializeObject<List<Internship>>(apiResponse);
                }
            }

            InternshipListViewModel viewModel = new InternshipListViewModel() {
                Internships = internships,
            };

            return View(viewModel);
        }
    }
}
