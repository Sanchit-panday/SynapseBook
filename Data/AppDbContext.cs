using Microsoft.EntityFrameworkCore;
using SynapseBook.Models;
using System.Collections.Generic;

namespace SynapseBook.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options) { }

        public DbSet<Booking> Bookings { get; set; }
    }
}
