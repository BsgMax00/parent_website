import { useContext, useState } from "react";
import { InvoiceContext } from "../../Contexts/InvoiceContext";

import Invoice from "../../Classes/Invoice";
import InvoiceManagmentDropdown from "./InvoiceManagmentDropdown";
import InvoiceManagmentDropdownItem from "./InvoiceManagmentDropdownItem";

const InvoiceCreateBody = () => {
    const { postInvoiceData, getLastInvoiceIndex } = useContext(InvoiceContext);
    const [ invoiceName, setInvoiceName ] = useState("");
    const [ invoiceDescription, setInvoiceDescription ] = useState(null) 
    const [ invoicePrice, setInvoicePrice ] = useState("");
    const [ invoiceDate, setInvoiceDate ] = useState(new Date().toISOString().split("T")[0]);
    const [ invoiceRepeat, setInvoiceRepeat ] = useState("Niet");
    const [ invoiceStatus, setInvoiceStatus ] = useState("Niet betaald");
    
    const CreateInvoice = () => {
        const data = new Invoice(Number(getLastInvoiceIndex()) + 1, invoiceName, invoiceDescription, Number(invoicePrice), invoiceDate, null, invoiceRepeat, invoiceStatus, null);
        postInvoiceData(data);
    }

    return (
        <>
            <div>
                <div>
                    <label for="Name">Naam: </label>
                    <input required id="Name" name="Name" value={invoiceName} onChange={(e) => setInvoiceName(e.target.value)}/>
                </div>
                <div>
                    <label for="Description">Descriptie: </label>
                    <input id="Description" name="Description" value={invoiceDescription} onChange={(e) => setInvoiceDescription(e.target.value)}/>
                </div>
                <div>
                    <label for="Price">Prijs: </label>
                    <input required id="Price" name="Price" type="number" value={invoicePrice} onChange={(e) => setInvoicePrice(e.target.value)}/>
                </div>
                <div>
                    <label for="Date">Datum: </label>
                    <input id="Date" name="Date" type="date" value={invoiceDate} onChange={(e) => setInvoiceDate(e.target.value)}/>
                </div>
                <div>
                    <label for="Repeat">Repeat:</label>
                    <InvoiceManagmentDropdown Label={`Repeat: ${invoiceRepeat}`}>
                        <InvoiceManagmentDropdownItem event={() => setInvoiceRepeat("Niet")} value={"Niet"}/>
                        <InvoiceManagmentDropdownItem event={() => setInvoiceRepeat("wekelijks")} value={"wekelijks"}/>
                        <InvoiceManagmentDropdownItem event={() => setInvoiceRepeat("maandelijks")} value={"maandelijks"}/>
                        <InvoiceManagmentDropdownItem event={() => setInvoiceRepeat("3 maandelijks")} value={"3 maandelijks"}/>
                        <InvoiceManagmentDropdownItem event={() => setInvoiceRepeat("6 maandelijks")} value={"6 maandelijks"}/>
                        <InvoiceManagmentDropdownItem event={() => setInvoiceRepeat("jaarlijks")} value={"jaarlijks"}/>
                    </InvoiceManagmentDropdown>
                </div>
                <div>
                    <label for="Status">Status:</label>
                    <InvoiceManagmentDropdown Label={`Status: ${invoiceStatus}`}>
                        <InvoiceManagmentDropdownItem event={() => setInvoiceStatus("Niet betaald")} value={"Niet betaald"}/>
                        <InvoiceManagmentDropdownItem event={() => setInvoiceStatus("betaaldt")} value={"betaaldt"}/>
                        <InvoiceManagmentDropdownItem event={() => setInvoiceStatus("geanulleerd")} value={"geanulleerd"}/>
                        <InvoiceManagmentDropdownItem event={() => setInvoiceStatus("Geld terug")} value={"Geld terug"}/>
                    </InvoiceManagmentDropdown>
                </div>
                <button onClick={CreateInvoice}>Maak Invoice</button>
            </div>
        </>
    );
};

export default InvoiceCreateBody;