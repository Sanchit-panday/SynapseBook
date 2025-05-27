using Microsoft.EntityFrameworkCore; // Ensure this is included
using Microsoft.EntityFrameworkCore.SqlServer; // Optional, for clarity
using SynapseBook.Data;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using System.Security.Claims;

// Add the following NuGet package to your project if not already installed:
// Microsoft.EntityFrameworkCore.SqlServer

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();


//using Microsoft.EntityFrameworkCore; // Add this at the top if missing

builder.Services.AddDbContext<AppDbContext>(options =>
    // use for SQL Express
    //options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"))

    // use for PostgreSQL
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection"))
);

builder.Services.AddAuthorization();

//var bytes = Encoding.UTF8.GetBytes(builder.Configuration["Authentication:JWTSecret"] ?? throw new InvalidOperationException("JWT Secret is not configured."));

//builder.Services.AddAuthentication().AddJwtBearer(options =>
//{
//    options.TokenValidationParameters = new TokenValidationParameters
//    {
//        ValidateIssuerSigningKey = true,
//        IssuerSigningKey = new SymmetricSecurityKey(bytes),
//        ValidAudience = builder.Configuration["Authentication:ValidAudience"],
//        ValidIssuer = builder.Configuration["Authentication:ValidIssuer"],
//    };
//});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.MapControllers();

//add require authorization to the API endpoints
//app.MapControllers().RequireAuthorization();

app.Run();
