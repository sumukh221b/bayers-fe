import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
// import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import { RouterProvider } from "react-router-dom";
import router from "./components/routes/routes";
import { MantineProvider } from "@mantine/core";
import theme from "./theme/mantineTheme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <MantineProvider theme={theme} withCssVariables={false}>
        <RouterProvider router={router} />
      </MantineProvider>
    </Provider>
  </React.StrictMode>
);
