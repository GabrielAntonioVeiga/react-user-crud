import { ReactNode, useEffect, useLayoutEffect, useState } from "react"
import Button from "../components/Button"
import { UserContext } from "../contexts/UserContext"
import { api } from "../services/userapi"

export default function () {
  const [dataUser, setDataUser] = useState([])

  const getDataAll = async () => {
    const request = await api.get("api/users/")
    setDataUser(await request.data.data)
  }

  useEffect(() => {
    getDataAll()
  }, [])

  console.log(dataUser)

  const removeUser = (removeidx: number, id: number) => {
    setDataUser(dataUser.filter((_, idx) => idx != removeidx))
    api.delete(`api/user/${id}`)
    console.log("user succesfully deleted ")
  }

  return (
    <>
      <h1>Admin Page</h1>
      <ul className="adminUserData-container">
        {dataUser.map(
          (person: { id: number; name: string; email: string }, idx) => (
            <li key={idx}>
              <Button
                button="delete"
                onClick={() => removeUser(idx, person.id)}
              ></Button>
              <span> Id: {person.id} </span>
              <span> Name: {person.name}</span>
              <span> Email: {person.email}</span>
            </li>
          )
        )}
      </ul>
    </>
  )
}
