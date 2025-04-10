const DropdownList = ({ children, Label, styling }) => {
    return (
        <>
            <div className="dropdown">
                <button className={styling} type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                    {Label}
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    {children}
                </div>
            </div>
        </>
    );
};

export default DropdownList;