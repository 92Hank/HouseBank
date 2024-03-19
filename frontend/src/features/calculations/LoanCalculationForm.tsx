import { useState } from "react";
import { Typography, Box, TextField, Button } from "@mui/material";
import agent from "../../app/api/agent";
import axios, { AxiosResponse } from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// import SliderSelect from "../../app/components/SliderSelect";
// import PaybackTimeSelect from "../../app/components/PaybackTimeSelect";
// import Result from "../../app/components/Result";

interface FormInput {
  amount: number;
  interest?: number;
  years: number;
}
const schema = yup.object().shape({
  amount: yup.number().required("Amount is a required field"),
  interest: yup.number(),
  years: yup.number().required("Years is a required field"),
});

export default function LoanCalculationForm() {
  const { register, handleSubmit } = useForm<FormInput>({
    resolver: yupResolver(schema), // yup, joi and even your own.
  });
  const [data, setData] = useState<FormInput>();
  const [monthlyPayment, setMonthlyPayment] = useState<number>(0);

// const schema = yup.object({
//   amount: yup.number().required("Amount is a required field"),
//   years: yup.number().required("Years is a required field"),
// });

  // const [loan, setLoan] = useState<LoanCalculationFormValues>(
  //   new LoanCalculationFormValues()
  // );
  // const calculation = agent.LoanCalculate.calculate(loanCalculation);

  // useEffect(() => {
  //   setLoading(true);

  //   if (calculation !== undefined || calculation !== null) {
  //     setLoading(false);
  //   }
  // }, [calculation]);

  // function handleFormSubmit(loanCalculation: LoanCalculationFormValues) {
  //   setSubmitted(true);
  //   if (!loanCalculation.amount) {
  //     let newloanCalculation = {
  //       ...loanCalculation,
  //     };
  //     setLoan(newLoanCalculation);
  //     agent.LoanCalculate.calculate(newloanCalculation);
  //     setSubmitted(true);
  //   }
  // }

  // if (loading) return <LoadingComponent />;
  const onSubmit = (data: FormInput) => {
    const userData = {
      ...data,
      amount: data.amount,
      interest: 3.5,
      years: data.years,
    };

    console.log(userData);

    setData(userData);

    agent.LoanCalculate.calculate(userData).then((response) => {
     setMonthlyPayment(response.data);
     console.log("Submit : " + response.data);
    });
  //   // });
    // axios
    //   .post("https://localhost:5001/api/loanCalculation", userData)
    //   .then((response: AxiosResponse) => {
    //     setMonthlyPayment(response.data);
    //     console.log("Submit : " + response.data);
    //   });
  };

  // const handleChange = (e: React.ChangeEvent<any>) => {
  //   const value = e.target.value;
  //   console.log(value);
  //   setData(value);
  // };

  // const handleSubmit = (e: React.ChangeEvent<any>) => {
  //   e.preventDefault();
  //   const userData: LoanCalculationFormValues = {
  //     amount: data.amount,
  //     interest: data.interest,
  //     years: data.years,
  //   };
  //   // agent.LoanCalculate.calculate(userData).then((response) => {
  //   //   setMonthlyPayment(response);
  //   // });
  //   console.log("userData " + userData.amount);
  //   axios
  //     .post("https://localhost:5001/api/loanCalculation", userData)
  //     .then((response: AxiosResponse) => {
  //       setMonthlyPayment(response.data);
  //       console.log("Submit 1" + response.data);
  //     });
  //   console.log("Submit " + monthlyPayment);
  // };

  return (
    <>
      <Box>
        <Typography variant="h2">LoanCalculation Form</Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* <TextField
            inputProps={{ type: "number" }}
            label="Amount"
            value={data.amount}
            onChange={handleChange}
          />
          <TextField
            inputProps={{ type: "number" }}
            label="Years"
            value={data.years}
            onChange={handleChange}
          /> */}
          <input type="number" {...register("amount")} />
          <input type="number" {...register("years")} />
          <input type="submit" name="Submit" />
        </form>
        <Typography>Monthly payment: {monthlyPayment.toFixed(2)} SEK</Typography>
        <Typography>Interest: {data ? data.interest : 0} %</Typography>
        {/* <Container maxWidth="xl" sx={{ marginTop: 4 }}>
          <Grid container spacing={5} alignItems="center">
            <Grid item xs={12} md={6}>
              <SliderSelect data={data} setData={setData} />
              <PaybackTimeSelect data={data} setData={setData} />
            </Grid>
            <Grid item xs={12} md={6}>
              <Result data={data} />
            </Grid>
          </Grid>
        </Container> */}
      </Box>
    </>
  );
}
