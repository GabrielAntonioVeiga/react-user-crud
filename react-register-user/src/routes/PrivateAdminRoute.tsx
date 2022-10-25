import { useContext } from "react"
import { Outlet, Navigate } from "react-router-dom"
import { UserContext } from "../contexts/UserContext"

const PrivateAdminRoute = () => {
    const { userEmail } = useContext(UserContext)
    return userEmail == "admin@example.com" ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateAdminRoute

