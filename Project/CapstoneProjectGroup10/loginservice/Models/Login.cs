using System.ComponentModel.DataAnnotations;

namespace loginservice.Models
{
    public class Login
    {
        [Key]
        public int id { get; set; }
        public string Name { get; set; }
        
        public string Email { get; set; }
        public string Username { get; set; }

        public string Password { get; set; }
        public string PhoneNumber { get; set; }

        [Required]
        public string Role { get; set; }
    }
}
