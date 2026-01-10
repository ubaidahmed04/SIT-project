import { createContext, useState } from "react";

export const UserContext = createContext()

const AuthProvider = ({children})=>{
    const [user, setUser] = useState(null)
    const login = (data)=>{
        setUser(data)
        localStorage.setItem("user", JSON.stringify(data))
    }
    const logout = ()=>{
        setUser(null)
    }
    // UseEffect
    return <UserContext.Provider value={{user, login , logout}}>{children}</UserContext.Provider>
}
export default AuthProvider

