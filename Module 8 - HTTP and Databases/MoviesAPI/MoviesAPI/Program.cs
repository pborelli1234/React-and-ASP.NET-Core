using Microsoft.AspNetCore.Authentication.JwtBearer;
using MoviesAPI.Filters;
using MoviesAPI.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers(options =>
{
    options.Filters.Add(typeof(MyExceptionFilter));
});
builder.Services.AddResponseCaching();
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer();
builder.Services.AddSingleton<IRepository, InMemoryRepository>();
builder.Services.AddTransient<MyActionFilter>();

var app = builder.Build();

// Configure the HTTP request pipeline.

//var logger = app.Logger;

//app.Use(async (context, next) =>
//{
//    using (var swapStream = new MemoryStream())
//    {
//        var originalResponseBody = context.Response.Body;
//        context.Response.Body = swapStream;

//        await next.Invoke();

//        swapStream.Seek(0, SeekOrigin.Begin);
//        string responseBody = new StreamReader(swapStream).ReadToEnd();
//        swapStream.Seek (0, SeekOrigin.Begin);

//        await swapStream.CopyToAsync(originalResponseBody);
//        context.Response.Body = originalResponseBody;

//        logger.LogInformation(responseBody);
//    }
//});

//app.Run(async context =>
//{
//    await context.Response.WriteAsync("I am short-circuiting the pipeline.");
//});

//var env = app.Environment;

//if (env.IsDevelopment())
//{
//    app.UseDeveloperExceptionPage();
//}

app.UseAuthentication();

app.UseAuthorization();

app.UseResponseCaching();

app.MapControllers();

app.Run();
