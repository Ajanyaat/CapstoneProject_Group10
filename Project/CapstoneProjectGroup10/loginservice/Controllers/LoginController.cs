using loginservice.Data;
using loginservice.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Text.Json.Serialization;

namespace loginservice.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly DbContextClass _context;



        public LoginController(DbContextClass context)

        {

            _context = context;

        }

        //get

        [HttpGet] 
        public async Task<ActionResult> RegisterUser()
        {
            return Ok(await _context.LoginTB.ToListAsync());
        }

        //post:

        [HttpPost("user")]

        public async Task<ActionResult> RegisterUser([FromBody] Login model)

        {

            model.Role = "User";

            _context.LoginTB.Add(model); //LoginTB is table

            await _context.SaveChangesAsync();

            return Ok(model);

        }

        //post

        [HttpPost("admin")]

        public async Task<ActionResult> RegisterAdmin([FromBody] Login model)

        {

            model.Role = "Admin";

            _context.LoginTB.Add(model);

            await _context.SaveChangesAsync();

            return Ok(model);

        }
        //Put
        [HttpPut("{id:int}")]
        public async Task<ActionResult<Login>>put([FromBody]Login Admin ,int id)
        {
            if(id==0)
            {
                return BadRequest();
            }
            _context.LoginTB.Update(Admin);
            await _context.SaveChangesAsync();
            return Ok(Admin);
        }
        //Delete
        [HttpDelete("{id:int}")]
        public async Task<ActionResult>Delete(int id)
        {
            var result = _context.LoginTB.Find(id);
            _context.LoginTB.Remove(result);
            await _context.SaveChangesAsync();
            return Ok(result);
        }
    }
}
