import { useContext } from "react"
import { UserContext } from "../context/userContext"
import { Navigate, Outlet } from "react-router"

export const ProtectRoute  = (children) =>{
    const {user} = useContext(UserContext)
    return (user ? <Outlet/> : <Navigate to={'/login'} replace />)
}