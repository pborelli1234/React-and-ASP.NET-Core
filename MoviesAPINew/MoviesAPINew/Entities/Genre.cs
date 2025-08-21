using MoviesAPINew.Validations;
using System.ComponentModel.DataAnnotations;

namespace MoviesAPINew.Entities
{
    public class Genre
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "The {0} field is required!")]
        [StringLength(50)]
        [FirstLetterUppercase]
        public string Name { get; set; }
    }
}
