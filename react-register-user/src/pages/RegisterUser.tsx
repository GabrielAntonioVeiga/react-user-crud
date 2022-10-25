import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import { UserContext } from "../contexts/UserContext";
import { UserFormData } from "../types/user";

export default function () {
  const { createUser } = useContext(UserContext);
  const [type, setType] = useState("password");

  // async function testeDeRequisicao() {
  //   const req = await fetch("http://127.0.0.1:8080/api/user/22");
  //   //api/user/3 para estatico, sem cors
  //   const res = await req.json();
  //   console.log(res);
  // }

  function onSubmit(data: UserFormData) {
    createUser(data);
  }

  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };

  return (
    <>
      <strong>Create User</strong>
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
            label="User *"
            placeholder="User field"
            type="text"
            name="name"
            register={register}
          />
          <Input
            label="Password *"
            placeholder="Password field"
            type={type}
            name="password"
            register={register}
          />
          <Button
            button="Submit"
            type="submit"
            // onClick={testeDeRequisicao}
          />
          <Button button="Go to login" type="button" onClick={handleClick} />
        </form>
      </main>
    </>
  );
}
