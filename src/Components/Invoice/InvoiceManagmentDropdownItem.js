const InvoiceManagmentDropdownItem = ({ event, value }) => {
    return (
        <>
            <p className="dropdown-item my-1" onClick={event}>{value}</p>
        </>
    );
};

export default InvoiceManagmentDropdownItem;