import axios, { AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { router } from "../router/Routes"
import { Calculate } from './../models/calculate';

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

        break;
      case 401:
        toast.error(data.title);

        break;
      case 500:
        router.navigate("server-error", { state: { error: data } });
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
  calculate: (calculate: Calculate) =>
    requests.post("/loanCalculation", calculate),
};

const agent = {
  LoanCalculate,
};

export default agent;
