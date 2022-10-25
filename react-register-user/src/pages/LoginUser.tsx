import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../components/Button";
import Input from "../components/Input";
import { UserContext } from "../contexts/UserContext";
import { UserFormData } from "../types/user";

export default function () {
  const { loginRequest } = useContext(UserContext);
  const [type, setType] = useState("password");

  const onSubmit = async (data: UserFormData) => {
    loginRequest(data);
  };

  const { register, handleSubmit } = useForm();

  return (
    <>
      <strong>Login User</strong>
      <main>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Email *"
            placeholder="Email field"
            type="email"
            name="email"
            register={register}
          />
          <Input
            label="Password *"
            placeholder="Password field"
            type={type}
            name="password"
            register={register}
          />
          <Button button="Submit" type="submit" />
        </form>
      </main>
    </>
  );
}
