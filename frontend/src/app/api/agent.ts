import axios, { AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { router } from "../router/Routes"
import { LoanCalculation } from "../models/loanCalculation";

const sleep = () => new Promise((resolve) => setTimeout(resolve, 500));

axios.defaults.baseURL = "https://localhost:5001/api/";

const responseBody = (response: AxiosResponse) => response.data;

axios.interceptors.response.use(
  async (response) => {
    if (process.env.NODE_ENV === "development") await sleep();
    return response;
  },
  (error: any) => {
    const { data, status } = error.response!;

    switch (status) {
      case 400:
        if (data.errors) {
          const modelStateErrors: string[] = [];
          for (const key in data.errors) {
            if (data.errors[key]) {
              modelStateErrors.push(data.errors[key]);
            }
          }
          throw modelStateErrors.flat();
        }
        toast.error(data.title);
        // toast.error(data.title, {
        //     theme: "colored"
        // });
        break;
      case 401:
        toast.error(data.title);
        // toast.error(data.title, {
        //     theme: "colored"
        // });
        break;
      case 500:
        router.navigate("server-error", { state: { error: data } });
        // toast.error(data.title, {
        //     theme: "colored"
        // });
        break;
      default:
        break;
    }

    return Promise.reject(error.response);
  }
);

const requests = {
  post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
};

const LoanCalculate = {
  calculate: (loanCalculation: LoanCalculation) =>
    requests.post("/loanCalculation", loanCalculation),
};

// const TestErrors = {
//   get404Error: () => requests.get("buggy/not-found"),
//   get400Error: () => requests.get("buggy/bad-request"),
//   get401Error: () => requests.get("buggy/unauthorised"),
//   getValidationError: () => requests.get("buggy/validation-error"),
//   get500Error: () => requests.get("buggy/server-error"),
// };

const agent = {
  LoanCalculate,
};

export default agent;
