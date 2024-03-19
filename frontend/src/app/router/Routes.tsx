import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../layout/App";
import About from "../../features/about/About";
import Home from "../../features/home/Home";
import ServerError from "../errors/ServerError";
import NotFound from "../errors/NotFound";
import LoanCalculationForm from "../../features/calculations/LoanCalculationForm";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "loanCalculation", element: <LoanCalculationForm /> },
      { path: "about", element: <About /> },
      { path: "server-error", element: <ServerError /> },
      { path: "not-found", element: <NotFound /> },
      { path: "*", element: <Navigate replace to="not-found" /> },
    ],
  },
]);
