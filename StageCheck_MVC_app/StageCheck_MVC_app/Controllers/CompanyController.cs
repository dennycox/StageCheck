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
    public class CompanyController : Controller
    {
        HttpClientHandler clientHandler = new HttpClientHandler();

        List<Company> companies;

        public CompanyController()
        {
            clientHandler.ServerCertificateCustomValidationCallback = (sender, cert, chain, sslPolicyErrors) => { return true; };
        }

        public async Task<IActionResult> CompanyList()
        {
            companies = new List<Company>();

            using (var httpClient = new HttpClient())
            {
                using (var response = await httpClient.GetAsync("https://localhost:44330/api/Companies"))
                {
                    string apiResponse = await response.Content.ReadAsStringAsync();
                    companies = JsonConvert.DeserializeObject<List<Company>>(apiResponse);
                }
            }

            CompanyListViewModel viewModel = new CompanyListViewModel()
            {
                Companies = companies,
            };

            return View(viewModel);
        }
    }
}
