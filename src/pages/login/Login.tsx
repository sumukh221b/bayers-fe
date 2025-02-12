import LoginImage from "../../assets/images/loginlogo.png";
import UserLogin from "./UserLogin";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAppSelector } from "../../redux/store";
import { loginSelector } from "../../redux/auth/authSlice";

const Login = () => {
  const navigate = useNavigate();
  const { success } = useAppSelector(loginSelector);

  useEffect(() => {
    if (success) {
      navigate(`/dashboard`);
    }
  }, [success]);

  return (
    <div className="flex items-center justify-start w-screen h-screen">
      <div className="flex flex-col items-center justify-center w-1/2 p-4">
        <div className="w-[22.5rem]">{!success && <UserLogin />}</div>
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
