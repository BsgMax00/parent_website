const Sidebar = () => {
    return (
        <>
            <div className="sidebar bg-light vh-100 p-3 border" style={{width: "280px"}}>
                <h3 className="text-center text-black">Test</h3>
                <hr/>
                <ul className="nav flex-column">
                    <li className="nav-item my-1">
                        <a className="nav-link text-body-tertiary" href="/">Dashboard</a>
                    </li>
                    <li className="nav-item my-1">
                        <a className="nav-link text-body-tertiary" href="/facturen">Facturen</a>
                    </li>
                </ul>
            </div>
        </>
    )
};

export default Sidebar;