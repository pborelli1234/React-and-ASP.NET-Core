using System.ComponentModel.DataAnnotations;

namespace MoviesAPINew.Dtos
{
    public class RatingDTO
    {
        [Range(1, 10)]
        public int Rating { get; set; }
        public int MovieId { get; set; }
    }
}
