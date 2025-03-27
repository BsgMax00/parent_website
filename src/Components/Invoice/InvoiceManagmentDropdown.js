const InvoiceManagmentDropdown = ({ children }) => {
    return (
        <>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                    TestButton
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    {children}
                </div>
            </div>
        </>
    )
};

export default InvoiceManagmentDropdown;