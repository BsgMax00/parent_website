import { Outlet } from "react-router-dom";
import SidebarBody from "./SideBar/SidebarBody";

const Layout = () => {
    return (
        <>
            <div className="container-fluid bg-light">
                <div className="row">
                    <div className="col-auto px-0">
                        <div className="p-3 vh-100 position-sticky top-0">
                            <SidebarBody/>
                        </div>
                    </div>
                    <div className="col p-3">
                        <Outlet/>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Layout;