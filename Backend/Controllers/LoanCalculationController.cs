using Domain.Entities;
using Domain.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoanCalculationController : ControllerBase
    {
        private readonly ILoanCalculationService _loanCalculationService;

        public LoanCalculationController(ILoanCalculationService loanCalculationService)
        {
            _loanCalculationService = loanCalculationService;
        }

        [HttpPost]
        [ProducesResponseType(200, Type = typeof(decimal))]
        [ProducesResponseType(400, Type = typeof(void))]
        public IActionResult Calculate([FromBody] LoanCalculation loanCalculation)
        {
            return Ok(_loanCalculationService.Calculate(loanCalculation));
        }
    }
}
