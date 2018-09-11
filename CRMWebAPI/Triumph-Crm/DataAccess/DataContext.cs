using System;
using Microsoft.EntityFrameworkCore;
using TriumphCrm.Models;

namespace TriumphCrm.DataAccess
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Users> Users { get; set; }
    }
}
