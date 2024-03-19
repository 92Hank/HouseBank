import { Loan } from './loan';
import { LoanCalculation } from './loanCalculation';

export interface Calculate {
  loan: Loan;
  loanCalculation: LoanCalculation;
}
