import {
  Button as MantineButton,
  ButtonProps as MantineButtonProps,
} from "@mantine/core";
import { FC } from "react";
import "./style.scss";

type ButtonProps = {
  label: string;
  props?: MantineButtonProps;
  onClick?: () => void;
  inputButton?: boolean;
  id?: string;
  isValid?: boolean;
};

const Button: FC<ButtonProps> = ({
  label,
  props,
  onClick,
  inputButton,
  id,
  isValid,
}) => {
  let buttonProps = {
    variant: "light",
    w: "100%",
    h: "40",
    bg: "#5C47D0",
    c: "white",
    fz: "14",
    fw: "500",
    px: "40",
    py: "20",
    radius: 8,
    ...props,
  };

  if (isValid) {
    buttonProps = {
      ...buttonProps,
      color: "white",
      bg: "#D7D7E0",
      disabled: true,
    };
  }

  return (
    <MantineButton
      {...buttonProps}
      type={inputButton ? "submit" : undefined}
      onClick={onClick}
      id={id ?? ""}>
      {label}
    </MantineButton>
  );
};

export default Button;
