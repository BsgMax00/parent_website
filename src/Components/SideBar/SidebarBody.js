import SidebarItem from "./SidebarItem";

const SidebarBody = () => {
    return (
        <>
            <div className="sidebar bg-white p-3 border position-sticky h-100 top-0 p-3" style={{width: "280px"}}>
                <h3 className="text-center text-black">Test</h3>
                <hr/>
                <ul className="nav flex-column">
                    <SidebarItem item="" text="dashboard"/>
                    <SidebarItem item="kalender" text="Kalender"/>
                    <SidebarItem item="facturen" text="Facturen"/>
                </ul>
            </div>
        </>
    );
};

export default SidebarBody;