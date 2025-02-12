import { createBrowserRouter } from "react-router-dom";
import Login from "../../pages/login/Login";
import ListPatient from "../../pages/provider/ListPatient";
import Dashboard from "../../pages/dashboard/dashboard";
import Wellness from "../../pages/wellness/Wellness";

const routes = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/listpatient",
    element: <ListPatient />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/wellness",
    element: <Wellness />,
  },
];
const router = createBrowserRouter(routes);
export default router;
