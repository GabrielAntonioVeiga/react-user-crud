import { InputHTMLAttributes } from "react";
import { UseFormRegister, FieldValues, Path } from "react-hook-form";
import { StyledInput } from "./style";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: Path<FieldValues>;
  register: UseFormRegister<FieldValues>;
}

export default function (props: InputProps) {
  return (
    <>
      <div className="input-container">
        <label> {props.label} </label>
        <StyledInput {...props} {...props.register(props.name)} />
      </div>
    </>
  );
}
