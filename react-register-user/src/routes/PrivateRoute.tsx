import { useContext } from "react"
import { Outlet, Navigate } from "react-router-dom"
import { UserContext } from "../contexts/UserContext"

const PrivateRoute = () => {
  const token = localStorage.getItem("token")
  return token ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRoute
