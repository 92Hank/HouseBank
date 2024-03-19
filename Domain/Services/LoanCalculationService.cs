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
        public decimal Calculate(LoanCalculation loanCalculation)
        {
            var rate = loanCalculation.Interest > 0 ? loanCalculation.Interest / 100 : loanCalculation.Interest;
            var termInMonths = loanCalculation.Years * 12;

            return loanCalculation.Amount *
                ((decimal)Math.Pow(1 + (rate / 12), termInMonths) * ((decimal)rate / 12)) /
                ((decimal)Math.Pow(1 + (rate / 12), termInMonths) - 1);
        }
    }
}
