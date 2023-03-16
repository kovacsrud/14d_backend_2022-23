using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace IngatlanAPI.Models
{
    [Table("ingatlanok")]
    public class IngatlanModel
    {
        public int Id { get; set; }
        public KategoriaModel Kategoria { get; set; }
        public string Leiras { get; set; }
        public DateTime HirdetesDatuma { get; set; } = DateTime.Today;
        public bool Tehermentes { get; set; }
        public uint Ar { get; set; }
        public string  KepUrl { get; set; }

        public int KategoriaId { get; set; }
    }
}
