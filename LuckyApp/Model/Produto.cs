
using System.ComponentModel.DataAnnotations.Schema;
using System.Threading.Tasks;

namespace LuckyApp.Model
{
    [Table("Produto")]
    public class Produto
    {
        [Column("Id")]
        public int Id { get; set; }

        [Column("Descricao")]
        public string Descricao { get; set; }
    }
}
