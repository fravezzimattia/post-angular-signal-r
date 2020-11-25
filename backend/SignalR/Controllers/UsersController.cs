using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SignalR.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;

namespace SignalR.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private const string fileName = "./Seeds/Users.json";

        [AllowAnonymous]
        [HttpGet("Login")]
        public IActionResult Login()
        {
            string file = System.IO.File.ReadAllText(fileName);
            
            IEnumerable<User> users = JsonSerializer.Deserialize<IEnumerable<User>>(file);

            return Ok(GetRandom(users));
        }

        private User GetRandom(IEnumerable<User> list)
        {
            var rand = new Random();
            int num = list.Count();
            int randNum = rand.Next(num);
            return list.ElementAt(randNum);
        }
    }
}
