using System.ComponentModel.DataAnnotations;

namespace MoviesAPINew.Entities
{
    public class Actor
    {
        public int Id { get; set; }
        [Required]
        [StringLength(120)]
        public string Name { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string Biography { get; set; }
        [StringLength(500)]
        public string Picture { get; set; }
    }
}
