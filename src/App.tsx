import "./App.scss";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import { Outlet } from "react-router-dom";
import MainLayout from "./layout/main-layout/MainLayout";

function App() {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
}

export default App;
