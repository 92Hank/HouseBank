using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities
{
    public class LoanCalculation
    {
        public decimal Amount { get; set; }
        public double Interest { get; set; }
        public int Years { get; set; }
    }
}
