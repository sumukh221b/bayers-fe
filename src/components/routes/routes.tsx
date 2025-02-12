import { createBrowserRouter } from "react-router-dom";
import Login from "../../pages/login/Login";

const routes = [
  {
    path: "/login",
    element: <Login />,
  },
];

const router = createBrowserRouter(routes);
export default router;
