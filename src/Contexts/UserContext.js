import { createContext, useEffect, useState } from "react"
import { serviceLogin } from "../Services/UserService";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [ user, setUser ] = useState();

    const LoginUser = async ( mail, password ) => {
        const userData = await serviceLogin(mail, password);
        setUser(userData);
        window.sessionStorage.setItem("user", JSON.stringify(userData));
    }

    useEffect(() => {
        setUser(JSON.parse(window.sessionStorage.getItem("user")));
    }, [])
    
    return (
        <UserContext.Provider value={{ user, LoginUser }}>
            {children}
        </UserContext.Provider>
    )
}