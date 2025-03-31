const InvoiceManagmentDropdown = ({ children, Label }) => {
    return (
        <>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                    {Label}
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    {children}
                </div>
            </div>
        </>
    );
};

export default InvoiceManagmentDropdown;