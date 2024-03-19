export interface LoanCalculation {
  amount: number;
  interest?: number;
  years: number;
}

export class LoanCalculationFormValues {
  amount: number = 0;
  interest?: number = 3.5;
  years: number = 0;

  constructor(loanCalculation?: LoanCalculationFormValues) {
    if (loanCalculation) {
      this.amount = loanCalculation.amount;
      this.interest = loanCalculation.interest;
      this.years = loanCalculation.years;
    }
  }
}