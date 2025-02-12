// import Header from "@/components/header/Header";
// import Sidebar from "@/components/sidebar/Sidebar";
import { FC, ReactNode } from "react";
import "./style.scss";

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="w-screen h-screen">
      <div className="items-stretch w-full h-full overflow-hidden justify-stretch">
        {/* <Sidebar /> */}

        <div className="header-container">
          {/* <Header /> */}
          <div className="main-container">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
