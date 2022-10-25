import { Routes, Route, Navigate } from "react-router-dom"
import LoginUser from "../pages/LoginUser"
import RegisterUser from "../pages/RegisterUser"
import Home from "../pages/Home"
import Admin from "../pages/Admin"
import PrivateRoute from "./PrivateRoute"
import PrivateAdminRoute from "./PrivateAdminRoute"

export default function () {
  return (
    <>
      <Routes>
        <Route path="*" element={<Navigate to="/register" />} />
        <Route path="/login" element={<LoginUser />} />
        <Route path="/register" element={<RegisterUser />} />
        <Route element={<PrivateRoute />}>
          <Route path="/home" element={<Home />} />
        </Route>
        <Route element={<PrivateAdminRoute />} >
          <Route path="/admin" element={<Admin />} />
        </Route>
      </Routes>
    </>
  )
}
