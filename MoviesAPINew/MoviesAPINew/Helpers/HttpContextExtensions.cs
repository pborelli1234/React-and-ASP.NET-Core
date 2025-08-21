using Microsoft.EntityFrameworkCore;

namespace MoviesAPINew.Helpers
{
    public static class HttpContextExtensions
    {
        public async static Task InsertParametersPaginationInHeader<T>(this HttpContext httpContext,
            IQueryable<T> querable)
        {
            if (httpContext == null)
            {
                throw new ArgumentNullException(nameof(httpContext));
            }

            double count = await querable.CountAsync();

            httpContext.Response.Headers.Add("totalAmountOfRecords", count.ToString());
        }
    }
}
