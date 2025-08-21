using MoviesAPINew.Dtos;

namespace MoviesAPINew.Helpers
{
    public static class IQueryableExtensions
    {
        public static IQueryable<T> Paginate<T>(this IQueryable<T> querable, PaginationDTO paginationDTO)
        {
            return querable
                    .Skip((paginationDTO.Page - 1) * paginationDTO.RecordsPerPage)
                    .Take(paginationDTO.RecordsPerPage);
        }
    }
}
