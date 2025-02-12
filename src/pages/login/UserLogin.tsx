// import Icon from "@/components/icon/Icon";
// import { login } from "@/redux/auth/authActions";
// import { useAppDispatch } from "@/redux/store";
import { Form, Formik, FormikProps } from "formik";
import { useRef, useState } from "react";
import * as Yup from "yup";
import md5 from "md5";
import { useAppDispatch } from "../../redux/store";
import FormField from "../../components/form/FormField";
import Button from "../../components/button/Button";
import NewRegistration from "../registration/NewRegistration";
import { userLogin } from "../../redux/auth/authActions";

const UserLogin = () => {
  const dispatch = useAppDispatch();
  const [show, setShow] = useState(false);
  const [isForgetPassword, setIsForgetPassword] = useState(false);
  const [isRegistrationPage, setIsRegistartionPage] = useState(false);

  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email format") // Ensures proper email format
      .required("Email is required"),

    password: Yup.string()
      .min(8, "Password must be at least 8 characters") // Minimum 8 characters
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter") // At least one uppercase letter
      .matches(/[a-z]/, "Password must contain at least one lowercase letter") // At least one lowercase letter
      .matches(/\d/, "Password must contain at least one number") // At least one number
      .matches(
        /[@$!%*?&]/,
        "Password must contain at least one special character (@$!%*?&)"
      ) // At least one special character
      .required("Password is required"),
  });

  const forgetPasswordSchema = Yup.object().shape({
    email: Yup.string().required("Required"),
  });

  const loginValues = {
    email: "",
    password: "",
  };

  const formRef = useRef<FormikProps<typeof loginValues>>(null);

  const forgetPasswordValues = {
    email: "",
  };

  const forgetPasswordClick = () => {
    setIsForgetPassword(!isForgetPassword);
  };

  const handleSubmit = (
    values: typeof loginValues | typeof forgetPasswordValues
  ) => {
    if (isForgetPassword) {
      //forgetPassword action
      console.log(values);
    } else {
      const loginData = {
        ...values,
        // password: md5((values as typeof loginValues).password), // encrypt password before sending to server
      };
      dispatch(userLogin(loginData));
    }
  };

  const handleUserRegistration = () => {
    setIsRegistartionPage(!isRegistrationPage);
  };

  return (
    <>
      {!isRegistrationPage && (
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
            innerRef={formRef as any}
            initialValues={
              !isForgetPassword ? loginValues : forgetPasswordValues
            }
            validationSchema={
              !isForgetPassword ? loginSchema : forgetPasswordSchema
            }
            onSubmit={handleSubmit}>
            {(formProps: FormikProps<any>) => (
              <Form className="w-full">
                <div className="flex flex-col items-start justify-between gap-y-8">
                  <FormField
                    fieldName="email"
                    label="Email"
                    type="text"
                    fullWidth
                  />
                  {!isForgetPassword && (
                    <div className="flex flex-row">
                      <FormField
                        fieldName="password"
                        label="Enter Password"
                        type={show ? "text" : "password"}
                        fullWidth
                      />
                      <span
                        className="mt-6 cursor-pointer"
                        onClick={() => setShow(!show)}>
                        View
                      </span>
                    </div>
                  )}
                </div>
                {!isForgetPassword && (
                  <>
                    <p
                      className="pt-3 pb-3 mt-2 font-medium cursor-pointer text-bs text-primary-600"
                      onClick={forgetPasswordClick}>
                      Forgot password?
                    </p>
                    <p
                      className="pb-4 mt-2 font-medium cursor-pointer text-bs text-primary-600"
                      onClick={handleUserRegistration}>
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
                  isValid={!formProps.isValid}
                />
              </Form>
            )}
          </Formik>
        </div>
      )}
      {isRegistrationPage && (
        <NewRegistration handleUserRegistration={handleUserRegistration} />
      )}
    </>
  );
};

export default UserLogin;
