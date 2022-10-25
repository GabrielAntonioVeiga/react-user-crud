import { MouseEventHandler, useContext, useState, MouseEvent, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import { UserContext } from "../contexts/UserContext";
import { api } from "../services/userapi";
import { UserFormData } from "../types/user";
import { HiOutlinePencilAlt } from "react-icons/hi";
import PrivateAdminRoute from "../routes/PrivateAdminRoute";

export default function () {
  const navigate = useNavigate();
  const { logout, userEmail } = useContext(UserContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState();
  const [disabledValue, setDisabledValue] = useState(true);

  const getData: MouseEventHandler<HTMLButtonElement> = async (ev) => {
    ev.preventDefault();
    const request = await fetch(
      `http://127.0.0.1:8080/api/logged/${localStorage.getItem("token")}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      }
    );
    if (request.status >= 200 && request.status <= 299) {
      const user = await request.json();
      setName(user.name);
      setEmail(user.email);
      setId(user.id);

      return;
    }
    alert("Deu ruim!");
  };

  const updateUser = async (data: UserFormData) => {
    const request = await fetch(`http://127.0.0.1:8080/api/user/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
      }),
    });
    console.log("atualizado");
  };

  const toogleDisableValue = () => {
    setDisabledValue((curr) => !curr);
  };

  const adminRoute = () => {
    if ( userEmail == "admin@example.com" ) {
      navigate("/admin")
    }
  }

  useEffect(() => {
    adminRoute()
  }, [])

  const { register, handleSubmit } = useForm();

  return (
    <>
      <h1>Data</h1>
      <div className="userData-Container">
        <form onSubmit={handleSubmit(updateUser)}>
          <Input
            disabled={disabledValue}
            label="User: "
            name="name"
            register={register}
            type="text"
            defaultValue={name}
          />
          <span onClick={toogleDisableValue}>
            {" "}
            {disabledValue ? (
              <HiOutlinePencilAlt size="22px" color="#ededee" cursor="pointer" />
            ) : (
              <HiOutlinePencilAlt size="22px" color="#ededee" cursor="pointer" />
            )}{" "}
          </span>
          <Input
            disabled={disabledValue}
            label="Email: "
            name="email"
            register={register}
            type="email"
            defaultValue={email}
          />
          <Button button="update" type="submit" />
        </form>
      </div>
      <Button button="search" onClick={getData} type="button" />
      <Button button="exit" onClick={logout} type="button" />
    </>
  );
}
