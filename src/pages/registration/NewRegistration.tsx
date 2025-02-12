import { Form, Formik, FormikProps } from "formik";
import { FC, useEffect, useRef, useState } from "react";
import * as Yup from "yup";
import Button from "../../components/button/Button";
import FormField from "../../components/form/FormField";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { createUser } from "../../redux/user/userActions";
import { userSelector } from "../../redux/user/userSlice";

type NewRegistrationPops = {
  handleUserRegistration: () => void;
};

const NewRegistration: FC<NewRegistrationPops> = ({
  handleUserRegistration,
}) => {
  const dispatch = useAppDispatch();

  const { success } = useAppSelector(userSelector);

  const initialValues = {
    name: "",
    emailId: "",
    contact: "",
    age: "",
    gender: "",
    password: "",
  };

  const formRef = useRef<FormikProps<typeof initialValues>>(null);

  useEffect(() => {
    if (success === "Success") {
      handleUserRegistration();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [success]);

  const registrationSchema = Yup.object().shape({
    name: Yup.string()
      .matches(/^[a-zA-Z\s]+$/, "Only letters and spaces are allowed")
      .min(3, "Full Name must be at least 3 characters")
      .max(50, "Full Name cannot exceed 50 characters")
      .required("Full Name is required"),

    emailId: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),

    contact: Yup.string()
      .matches(/^[0-9]{10}$/, "Contact Number must be exactly 10 digits")
      .required("Contact Number is required"),

    age: Yup.number()
      .typeError("Age must be a number")
      .min(18, "Age must be at least 18")
      .max(100, "Age cannot exceed 100")
      .required("Age is required"),

    gender: Yup.string()
      .oneOf(["Male", "Female", "Other"], "Invalid gender selection")
      .required("Gender is required"),
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

  const handleRegistration = (values: typeof initialValues) => {
    const payload = {
      username: values.name,
      email: values.emailId,
      contact: values.contact,
      age: values.age,
      gender: values.gender,
      password: values.password,
    };
    dispatch(createUser(payload));
  };

  return (
    <div className="flex flex-col items-center justify-between w-full">
      <span
        className="flex items-start cursor-pointer flext-start"
        onClick={handleUserRegistration}>
        Back
      </span>
      <Formik
        innerRef={formRef}
        initialValues={initialValues}
        validationSchema={registrationSchema}
        onSubmit={handleRegistration}>
        {(formProps: FormikProps<any>) => (
          <Form className="w-full">
            <div className="flex flex-col items-start justify-between gap-y-8">
              <FormField
                fieldName="name"
                label="Full Name"
                type="text"
                fullWidth
              />
              <FormField
                fieldName="emailId"
                label="Email"
                type="text"
                fullWidth
              />
              <FormField
                fieldName="contact"
                label="Contact"
                type="text"
                fullWidth
              />
              <FormField fieldName="age" label="Age" type="text" fullWidth />
              <FormField
                fieldName="gender"
                label="Gender"
                type="text"
                fullWidth
              />
              <FormField
                fieldName="password"
                label="Password"
                type="text"
                fullWidth
              />
            </div>
            <div className="mt-5">
              <Button
                label="Register"
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
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default NewRegistration;
