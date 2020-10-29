using Microsoft.AspNetCore.Mvc.Testing;
using Newtonsoft.Json;
using StageCheck_API.Models;
using StageCheck_API.Data;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Xunit;
using Microsoft.Extensions.Logging;

namespace StageCheck_API_Test
{
    public class InternshipControllerTest : IClassFixture<CustomWebApplicationFactory<StageCheck_API.Startup>>
    {
        private readonly HttpClient _client;
        private readonly CustomWebApplicationFactory<StageCheck_API.Startup> _factory;

        public InternshipControllerTest(
        CustomWebApplicationFactory<StageCheck_API.Startup> factory)
        {
            _factory = factory;
            _client = factory.CreateClient(new WebApplicationFactoryClientOptions
            {
                AllowAutoRedirect = false
            });
        }

        [Fact]
        public async Task Get_Retrieve_Internships()
        {
            var response = await _client.GetAsync("api/internships");

            response.StatusCode.Should().Be(HttpStatusCode.OK);
        }

        [Fact]
        public async Task Get_Not_Retrieve_Internships()
        {
            var response = await _client.GetAsync("api/internship");

            response.StatusCode.Should().Be(HttpStatusCode.NotFound);
        }

        [Fact]
        public async Task Get_Retrieve_One_Internship()
        {
            var response = await _client.GetAsync("api/internships/1");

            response.StatusCode.Should().Be(HttpStatusCode.OK);
        }

        [Fact]
        public async Task Get_Not_Retrieve_One_Internship()
        {
            var response = await _client.GetAsync("api/internships/0");

            response.StatusCode.Should().Be(HttpStatusCode.BadRequest);
        }

        [Fact]
        public async Task Post_Succeed_Internship()
        {
            var response = await _client.PostAsync("api/internships", new StringContent(JsonConvert.SerializeObject(new Internship()
            {
                Title = "New internship title",
                Description = "New internship description"
            }), Encoding.UTF8, "application/json"));

            response.EnsureSuccessStatusCode();

            response.StatusCode.Should().Be(HttpStatusCode.Created);
        }

        [Fact]
        public async Task Put_Succeed_Internship()
        {
            var response = await _client.PutAsync("api/internships/1", new StringContent(JsonConvert.SerializeObject(new Internship()
            {
                Id = 1,
                Title = "Updated internship title",
                Description = "Updated internship description"
            }), Encoding.UTF8, "application/json"));

            response.StatusCode.Should().Be(HttpStatusCode.NoContent);
        }

        [Fact]
        public async Task Delete_Succeed_Internship()
        {
            var client = _factory.WithWebHostBuilder(builder =>
            {
                builder.ConfigureServices(services =>
                {
                    var serviceProvider = services.BuildServiceProvider();

                    using (var scope = serviceProvider.CreateScope())
                    {
                        var scopedServices = scope.ServiceProvider;
                        var db = scopedServices
                            .GetRequiredService<StageCheckContext>();
                        var logger = scopedServices
                            .GetRequiredService<ILogger<StageCheck_API.Startup>>();

                        try
                        {
                            Utilities.ReinitializeDbForTests(db);
                        }
                        catch (Exception ex)
                        {
                            logger.LogError(ex, "An error occurred seeding " +
                                "the database with test messages. Error: {Message}",
                                ex.Message);
                        }
                    }
                });
            })
      .CreateClient(new WebApplicationFactoryClientOptions
      {
          AllowAutoRedirect = false
      });

            var response = await client.DeleteAsync("api/internships/1");

            response.StatusCode.Should().Be(HttpStatusCode.OK);
        }
    }
}
