using Domain.Entities;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Validations
{
    public class LoanCalculationValidator : AbstractValidator<LoanCalculation>
    {
        public LoanCalculationValidator()
        {
            RuleFor(c => c.Amount)
                .GreaterThan(0).WithMessage("Amount must be greater than 0");
            RuleFor(c => c.Interest)
                .GreaterThan(0).WithMessage("Rate must be greater than 0%")
                .LessThan(100).WithMessage("Rate must be less than 100%");
            RuleFor(c => c.Years)
                .GreaterThan(0).WithMessage("Years must be greater than 0")
                .LessThan(100).WithMessage("Years must be less than 100");
        }
    }
}
