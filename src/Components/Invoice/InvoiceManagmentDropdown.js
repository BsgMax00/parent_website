import { useContext } from "react";
import { InvoiceContext } from "../../Contexts/InvoiceContext";

const InvoiceManagmentDropdown = () => {
    const { setInvoiceChunks } = useContext(InvoiceContext)
    return (
        <>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                    TestButton
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <p className="dropdown-item" onClick={() => setInvoiceChunks(5)}>5</p>
                    <p className="dropdown-item" onClick={() => setInvoiceChunks(10)}>10</p>
                    <p className="dropdown-item" onClick={() => setInvoiceChunks(25)}>25</p>
                </div>
            </div>
        </>
    )
};

export default InvoiceManagmentDropdown;