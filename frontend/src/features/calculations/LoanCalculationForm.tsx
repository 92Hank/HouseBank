import { useState } from "react";
import { Typography, Box } from "@mui/material";
import agent from "../../app/api/agent";
import { useForm } from "react-hook-form";
import { Calculate } from "../../app/models/calculate";

interface FormInput {
  calculate: Calculate;
}

export default function LoanCalculationForm() {
  const { register, handleSubmit } = useForm<FormInput>();
  const [data, setData] = useState<FormInput>();
  const [monthlyPayment, setMonthlyPayment] = useState<number>(0);

  const onSubmit = (data: FormInput) => {
    const userData = {
      ...data,
      loan: (data.calculate.loan = {
        loanType: "House Loan",
        interest: 3.5,
      }),
      loanCalculation: data.calculate.loanCalculation,
    };

    console.log(userData);

    setData(userData);

    agent.LoanCalculate.calculate(userData).then((response) => {
      setMonthlyPayment(response);
      console.log("Monthly payment : " + response);
    });
  };

  return (
    <>
      <Box>
        <Typography variant="h2">Calculation Form</Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Amount </label>
          <input
            type="number"
            {...register("calculate.loanCalculation.amount")}
          />
          <label> Years </label>
          <input
            type="number"
            {...register("calculate.loanCalculation.years")}
          />
          <input type="submit" name="Submit" />
        </form>
        <Typography>
          Monthly payment: {monthlyPayment ? monthlyPayment.toFixed(2) : 0} SEK
        </Typography>
        <Typography>
          Interest: {data ? data.calculate.loan.interest : 0} %
        </Typography>
      </Box>
    </>
  );
}
