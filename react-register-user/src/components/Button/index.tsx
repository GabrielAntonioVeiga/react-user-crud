import { ButtonHTMLAttributes } from "react";
import { StyledButton } from "./style";

interface buttonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  button: string;
}

export default function (props: buttonProps) {
  return (
    <>
      <div>
        <StyledButton {...props}> {props.button} </StyledButton>
      </div>
    </>
  );
}
