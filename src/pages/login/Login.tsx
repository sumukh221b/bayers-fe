import LoginImage from "@/assets/images/loginlogo.png";
import UserLogin from "./UserLogin";
// import { TabRouteNames } from "@/types";
// import LoginSuccess from "./LoginSuccess";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Login = () => {
  const navigate = useNavigate();
  //   const user = useAppSelector(userData);

  useEffect(() => {
    // navigate(`/Dashboard`);
  }, [navigate]);

  return (
    <div className="flex items-center justify-start w-screen h-screen">
      <div className="flex flex-col items-center justify-center w-1/2 p-4">
        <div className="w-[22.5rem]">
          <UserLogin />
        </div>
      </div>
      <div className="relative w-1/2 h-full">
        <div className="w-full h-full">
          <img
            src={LoginImage}
            alt="Login Screen Image"
            className="object-fill w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
