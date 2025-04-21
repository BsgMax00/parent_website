import User from "../Classes/User";
import { serviceFetch } from "./BaseService";

const baseUrl = "http://localhost:5293/User"

export const serviceLogin = async ( mail, password ) => {
    const body = JSON.stringify({"userMail": mail, "userPassword": password})
    const data = await serviceFetch("POST", `${baseUrl}/Login`, body);
    const convertedUser = new User(data.user.userId, data.user.userName, data.user.userEmail, data.user.userRole);
    
    window.sessionStorage.setItem("token", data.token);

    return convertedUser;
}