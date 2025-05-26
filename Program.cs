using Microsoft.EntityFrameworkCore; // Ensure this is included
using Microsoft.EntityFrameworkCore.SqlServer; // Optional, for clarity
using SynapseBook.Data;

// Add the following NuGet package to your project if not already installed:
// Microsoft.EntityFrameworkCore.SqlServer

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();

//using Microsoft.EntityFrameworkCore; // Add this at the top if missing

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"))
);

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
app.Run();
