using MoviesAPI.Validations;
using System.ComponentModel.DataAnnotations;

namespace MoviesAPI.Entities
{
    public class Genre
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "The {0} field is required!")]
        [StringLength(50)]
        [FirstLetterUppercase]
        public string Name { get; set; }

        //[Range(18,120)]
        //public int Age { get; set; }
        ////[CreditCard]
        //public string CreditCard { get; set; }
        //[Url]
        //public string Url { get; set; }
    }
}
