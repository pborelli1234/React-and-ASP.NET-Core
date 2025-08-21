using System.ComponentModel.DataAnnotations;

namespace MoviesAPINew.Entities
{
    public class Movie
    {
        public int Id { get; set; }
        [StringLength(maximumLength: 75)]
        [Required]
        public string Title { get; set; }
        public string Summary { get; set; }
        public bool InTheaters { get; set; }
        [StringLength(maximumLength: 250)]
        public string Trailer { get; set; }
        public DateTime ReleaseDate { get; set; }
        [StringLength(maximumLength: 250)]
        public string Poster { get; set; }
        public List<MoviesGenres> MoviesGenres { get; set; }
        public List<MovieTheatersMovies> MovieTheaterMovies { get; set; }
        public List<MoviesActors> MoviesActors { get; set; }
    }
}
