using Domain.Entities;
using Domain.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Services
{
    public class LoanCalculationService : ILoanCalculationService
    {
        public decimal Calculate(Calculate calculate)
        {
            var interest = calculate.Loan?.Interest > 0 ? calculate.Loan.Interest / 100 : calculate.Loan?.Interest;
            var termInMonths = calculate.LoanCalculation?.Years * 12;

            return (decimal)(calculate.LoanCalculation!.Amount *
                ((decimal)Math.Pow((double)(1 + (interest! / 12)), (double)termInMonths!) * ((decimal)interest! / 12)) /
                ((decimal)Math.Pow((double)(1 + (interest! / 12)), (double)termInMonths!) - 1));
        }
    }
}
