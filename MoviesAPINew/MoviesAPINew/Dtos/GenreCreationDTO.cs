using MoviesAPINew.Validations;
using System.ComponentModel.DataAnnotations;

namespace MoviesAPINew.Dtos
{
    public class GenreCreationDTO
    {
        [Required(ErrorMessage = "The {0} field is required!")]
        [StringLength(50)]
        [FirstLetterUppercase]
        public string Name { get; set; }
    }
}
