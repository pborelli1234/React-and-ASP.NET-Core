using System.ComponentModel.DataAnnotations;
using NetTopologySuite.Geometries;

namespace MoviesAPINew.Dtos
{
    public class MovieTheaterDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public double Latitude { get; set; }
        public double Longitude { get; set; }
    }
}
