using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StageCheck_API.Data;
using StageCheck_API.DTO;
using StageCheck_API.Models;

namespace StageCheck_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InternshipsController : ControllerBase
    {
        private readonly StageCheckContext _context;

        public InternshipsController(StageCheckContext context)
        {
            _context = context;
        }

        // GET: api/Internships
        [HttpGet]
        public async Task<ActionResult<IEnumerable<InternshipDTO>>> GetInternships(int? studyId = null, string search = null)
        {
            IQueryable<Internship> query = _context.Internships;

            if (studyId != null && studyId != 0)
            {
                query = query.Where(x => x.StudyId == studyId);
            }

            if (!string.IsNullOrWhiteSpace(search))
            {
                query = query.Where(x => x.Title.ToLower().Contains(search.Trim().ToLower()));
            }
            
            return await query.Select(x => InternshipToDTO(x)).ToListAsync();
        }

        // GET: api/Internships/5
        [HttpGet("{id}")]
        public async Task<ActionResult<InternshipDTO>> GetInternship(int id)
        {
            var internship = await _context.Internships.FindAsync(id);

            if (internship == null)
            {
                return NotFound();
            }

            return InternshipToDTO(internship);
        }

        // PUT: api/Internships/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutInternship(int id, InternshipDTO internshipDTO)
        {
            if (id != internshipDTO.Id)
            {
                return BadRequest();
            }

            var internship = await _context.Internships.FindAsync(id);
            if(internship == null)
            {
                return NotFound();
            }

            internship.Title = internshipDTO.Title;
            internship.Description = internshipDTO.Description;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException) when (!InternshipExists(id))
            {
                return NotFound();
            }

            return NoContent();
        }

        // POST: api/Internships
        [HttpPost]
        public async Task<ActionResult<InternshipDTO>> PostInternship(InternshipDTO internshipDTO)
        {
            var internship = new Internship
            {
                Title = internshipDTO.Title,
                Description = internshipDTO.Description,
            };

            _context.Internships.Add(internship);
            await _context.SaveChangesAsync();

            return CreatedAtAction(
                nameof(GetInternship),
                new { id = internship.Id },
                InternshipToDTO(internship));
        }

        // DELETE: api/Internships/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Internship>> DeleteInternship(int id)
        {
            var internship = await _context.Internships.FindAsync(id);
            
            if (internship == null)
            {
                return NotFound();
            }

            _context.Internships.Remove(internship);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool InternshipExists(int id) =>
            _context.Internships.Any(e => e.Id == id);

        private static InternshipDTO InternshipToDTO(Internship internship) =>
            new InternshipDTO
            {
                Id = internship.Id,
                Title = internship.Title,
                Description = internship.Description,
                StudyId = internship.StudyId,
                CompanyId = internship.CompanyId,
            };
    }
}
