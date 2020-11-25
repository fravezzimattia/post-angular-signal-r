using System;

namespace SignalR.Models
{
    public class Message
    {
        public string Text { get; set; }
        public DateTime Datetime { get; set; }
        public User User { get; set; }
        public bool Self { get; set; }
    }
}
