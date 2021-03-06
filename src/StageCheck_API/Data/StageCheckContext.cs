﻿using Microsoft.EntityFrameworkCore;
using StageCheck_API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StageCheck_API.Data
{
    public class StageCheckContext : DbContext
    {
        public StageCheckContext(DbContextOptions<StageCheckContext> options) : base(options)
        {

        }

        public DbSet<Internship> Internships { get; set; }
        public DbSet<Study> Studies { get; set; }
        public DbSet<Company> Companies { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Internship>().ToTable("Internship");
            modelBuilder.Entity<Study>().ToTable("Studies");
            modelBuilder.Entity<Company>().ToTable("Companies");
        }
    }
}
