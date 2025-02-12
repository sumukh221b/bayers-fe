// import Icon from "@/components/icon/Icon";
// import { login } from "@/redux/auth/authActions";
// import { useAppDispatch } from "@/redux/store";
// import { SpriteIconIds } from "@/types";
import { Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import md5 from "md5";
import { useAppDispatch } from "../../redux/store";
import FormField from "../../components/form/FormField";
import Button from "../../components/button/Button";

const UserLogin = () => {
  const dispatch = useAppDispatch();
  const [show, setShow] = useState(false);
  const [isForgetPassword, setIsForgetPassword] = useState(false);

  const loginSchema = Yup.object().shape({
    emailId: Yup.string().required("Required"),
    password: Yup.string().min(8).required("Required"),
  });

  const forgetPasswordSchema = Yup.object().shape({
    emailId: Yup.string().required("Required"),
  });

  const loginValues = {
    emailId: "test",
    password: "exampleHash1!",
  };

  const forgetPasswordValues = {
    emailId: "",
  };

  const forgetPasswordClick = () => {
    setIsForgetPassword(!isForgetPassword);
  };

  const handleSubmit = async (
    values: typeof loginValues | typeof forgetPasswordValues
  ) => {
    // if (isForgetPassword) {
    //   //forgetPassword action
    //   console.log(values);
    // } else {
    //   const loginData = {
    //     ...values,
    //     password: md5((values as typeof loginValues).password), // encrypt password before sending to server
    //   };
    //   dispatch(login(loginData));
    // }
  };

  return (
    <div className="flex flex-col items-start justify-start w-full p-4">
      <h1 className="mb-3 text-lg font-bold text-neutral-950">
        {isForgetPassword ? "Forget Password" : "Login"}
      </h1>
      <p className="mb-10 font-normal text-bl text-neutral-500">
        {isForgetPassword
          ? "Please enter your email id."
          : "Enter your details"}
      </p>

      <Formik
        initialValues={!isForgetPassword ? loginValues : forgetPasswordValues}
        validationSchema={
          !isForgetPassword ? loginSchema : forgetPasswordSchema
        }
        onSubmit={handleSubmit}>
        <Form className="w-full ">
          <div className="flex flex-col items-start justify-between gap-y-8">
            <FormField
              fieldName="emailId"
              label="Email"
              type="text"
              fullWidth
            />
            {!isForgetPassword && (
              <FormField
                fieldName="password"
                label="Enter Password"
                type={show ? "text" : "password"}
                fullWidth
              />
            )}
          </div>
          {!isForgetPassword && (
            <>
              <p
                className="mt-2 font-medium text-bs text-primary-600 "
                onClick={forgetPasswordClick}>
                Forgot password?
              </p>
              <p
                className="mt-2 font-medium text-bs text-primary-600 "
                onClick={forgetPasswordClick}>
                New User? Register here
              </p>
            </>
          )}
          <Button
            label={isForgetPassword ? "Confirm" : "Login"}
            inputButton
            props={{
              fz: "xs",
              fw: 600,
              h: 44,
              mt: 48,
              td: "italic",
              ff: "Inter",
            }}
          />
        </Form>
      </Formik>
    </div>
  );
};

export default UserLogin;
