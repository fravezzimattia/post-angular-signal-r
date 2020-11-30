using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using SignalR.Models;
using System.Threading.Tasks;

namespace SignalR.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ChatsController : Controller
    {
        private readonly IHubContext<MyHub> _hub;

        public ChatsController(IHubContext<MyHub> hub)
        {
            _hub = hub;
        }

        [HttpPost("messages")]
        public async Task<ActionResult<Message>> PostMessage(Message item)
        {
            await _hub.Clients.All.SendAsync("message", item);
            return Ok(item);
        }
    }
}
