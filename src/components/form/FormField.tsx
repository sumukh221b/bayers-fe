// import { SpriteIconIds } from "@/types";
// import { Tooltip } from "@mantine/core";
import { ErrorMessage, Field } from "formik";
import { FC, ReactNode } from "react";
// import Icon from "../icon/Icon";
import "../form/style.scss";
export type FormFieldProps = {
  type: string;
  placeholder?: string;
  fieldName: string;
  label?: string;
  actionHandler?: () => void;
  leftSection?: ReactNode;
  rightSection?: ReactNode;
  handleChange?: (value: string) => void;
  fullWidth?: boolean;
  disabled?: boolean;
};

const FormField: FC<FormFieldProps> = ({
  fieldName,
  label,
  type,
  placeholder,
  actionHandler,
  leftSection,
  rightSection,
  handleChange,
  fullWidth,
  disabled,
}) => {
  return (
    <div
      className={`h-full flex flex-col justify-start items-start gap-y-2 ${
        fullWidth ? "w-full" : "w-[200px]"
      }`}>
      {label && (
        <label htmlFor={fieldName} className="font-medium capitalize text-bs">
          {label}
        </label>
      )}
      <Field
        id={fieldName}
        name={fieldName}
        type={type}
        placeholder={
          placeholder ? placeholder : `Enter ${label && label.toLowerCase()}`
        }
        actionHandler={actionHandler}
        leftSection={leftSection}
        rightSection={rightSection}
        handleChange={handleChange}
        fullWidth={fullWidth}
        disabled={disabled}
      />
      <ErrorMessage
        name={fieldName}
        component="div"
        className="-mt-1 font-normal text-bs text-danger-600"
      />
    </div>
  );
};

export default FormField;
