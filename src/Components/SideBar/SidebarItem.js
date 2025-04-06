const SidebarItem = ({ item, text }) => {
    return (
        <>
            <li className="nav-item my-1">
                <a className="nav-link text-body" href={`/${item}`}>{text}</a>
            </li>
        </>
    );
};

export default SidebarItem;