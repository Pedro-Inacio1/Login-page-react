import { useContext } from "react"
import { AuthContext } from "./Context/auth"
import { useContext } from "react"

export const PrivateRoute = () => {
    const {signed} = useContext(AuthContext)
    return signed ? <Elementz /> : <Navigate to="/Login" />
}