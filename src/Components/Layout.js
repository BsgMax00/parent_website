import { Outlet } from "react-router-dom";
import Sidebar from "./SideBar/SideBar";

const Layout = () => {
    return (
        <>
            <div className="d-flex">
                <Sidebar/>
                <div className="flex-grow-1 m-2">
                    <Outlet/>
                </div>
            </div>
        </>
    )
};

export default Layout;