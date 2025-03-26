import { useState } from "react";
import Invoice from "../../Classes/Invoice";

const InvoiceCreateBody = () => {
    const [ invoiceName, setInvoiceName ] = useState("");
    const [ invoicePrice, setInvoicePrice ] = useState("");
    const [ invoiceDate, setInvoiceDate ] = useState("");
    const [ invoiceRepeat, setInvoiceRepeat ] = useState("");
    const [ invoiceStatus, setInvoiceStatus ] = useState("");

    const CreateInvoice = () => {
        const data = new Invoice("0", invoiceName, invoicePrice, invoiceDate, invoiceRepeat, invoiceStatus, "")
    }
    
    return (
        <>
            <div>
                <div>
                    <label for="Name">Naam: </label>
                    <input id="Name" name="Name" value={invoiceName} onChange={(e) => setInvoiceName(e.target.value)}/>
                </div>
                <div>
                    <label for="Price">Prijs: </label>
                    <input id="Price" name="Price" value={invoicePrice} onChange={(e) => setInvoicePrice(e.target.value)}/>
                </div>
                <div>
                    <label for="Date">Datum: </label>
                    <input id="Date" name="Date" value={invoiceDate} onChange={(e) => setInvoiceDate(e.target.value)}/>
                </div>
                <div>
                    <label for="Repeat">Repeat:</label>
                    <input id="Repeat" name="Repeat" value={invoiceRepeat} onChange={(e) => setInvoiceRepeat(e.target.value)}/>
                </div>
                <div>
                    <label for="Status">Status:</label>
                    <input id="Status" name="Status" value={invoiceStatus} onChange={(e) => setInvoiceStatus(e.target.value)}/>
                </div>
                <button onClick={CreateInvoice}>Maak Invoice</button>
            </div>
        </>
    );
};

export default InvoiceCreateBody;