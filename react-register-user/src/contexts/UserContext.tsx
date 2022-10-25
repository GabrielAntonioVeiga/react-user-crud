import {
  createContext,
  Dispatch,
  MouseEventHandler,
  PropsWithChildren,
  SetStateAction,
  useEffect,
  useState
} from "react"
import { api } from "../services/userapi"
import { UserFormData } from "../types/user"
import { useNavigate } from "react-router-dom"

type UserContextTypes = {
  createUser: (data: UserFormData) => void
  loginRequest: (data: UserFormData) => void
  logout: MouseEventHandler<HTMLButtonElement>
  //
  token: string
  setToken: Dispatch<SetStateAction<string>>
  //
  userEmail: string
  setUserEmail: Dispatch<SetStateAction<string>>
  //
  userId: number
  setUserId: Dispatch<SetStateAction<number>>
}

export const UserContext = createContext({} as UserContextTypes)

export const UserContextProvider = (props: PropsWithChildren) => {
  const navigate = useNavigate()
  const [token, setToken] = useState("")
  const [userEmail, setUserEmail] = useState("")
  const [userId, setUserId] = useState(Number)

  const createUser = async (data: UserFormData) => {
    const user = {
      email: data.email,
      name: data.name,
      password: data.password
    }

    await api.post("api/user/", user)
  }

  const loginRequest = async (data: UserFormData) => {
    const user = {
      email: data.email,
      password: data.password
    }

    const request = await api.post("api/login/", user)

    const responseData = await request.data

    console.log(responseData)

    setToken(responseData)

    if (request.status >= 200 && request.status <= 299) {
      localStorage.setItem("token", responseData.sesid)
      console.log("parabens")

      const requestEmail = await fetch(
        `http://127.0.0.1:8080/api/logged/${localStorage.getItem("token")}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )

      if (request.status >= 200 && request.status <= 299) {
        const user = await requestEmail.json()
        setUserEmail(user.email)
        setUserId(user.id)
      }
      navigate("/home")
      return
    }

    if (responseData.error) {
      alert(responseData.error)
      return
    }
  }

  const logout: MouseEventHandler<HTMLButtonElement> = () => {
    localStorage.removeItem("token")
    navigate("/login")
  }

  return (
    <>
      <UserContext.Provider
        value={{
          createUser,
          loginRequest,
          logout,
          token,
          setToken,
          userEmail,
          setUserEmail,
          userId,
          setUserId
        }}
      >
        {props.children}
      </UserContext.Provider>
    </>
  )
}
