using LuckyApp.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LuckyApp.Config
{
    public class Contexto : DbContext
    {
        public Contexto(DbContextOptions<Contexto> options) : base(options)
        {

            Database.EnsureCreated(); // se não existir db cria uma db
        }

        public DbSet<Produto> Produto { get; set; }
    }
}
