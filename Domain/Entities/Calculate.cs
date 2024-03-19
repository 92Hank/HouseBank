using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities
{
    public class Calculate
    {
        public Loan? Loan { get; set; }
        public LoanCalculation? LoanCalculation { get; set; }
    }
}
