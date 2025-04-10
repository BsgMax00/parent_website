import { useEffect,useContext, useState } from "react";
import { InvoiceContext } from "../../Contexts/InvoiceContext";

import Invoice from "../../Classes/Invoice";
import DropdownList from "../dropdown/DropdownList";
import DropdownItem from "../dropdown/DropdownItem";
import { useNavigate } from "react-router-dom";

const InvoiceCreateBody = ({ invoice = null }) => {
    const { isEditing, postInvoiceData, putInvoiceData, getLastInvoiceIndex } = useContext(InvoiceContext);
    const [ invoiceName, setInvoiceName ] = useState("");
    const [ invoiceDescription, setInvoiceDescription ] = useState(null) 
    const [ invoicePrice, setInvoicePrice ] = useState("");
    const [ invoiceDate, setInvoiceDate ] = useState(new Date().toISOString().split("T")[0]);
    const [ invoiceRepeat, setInvoiceRepeat ] = useState("Niet");
    const [ invoiceStatus, setInvoiceStatus ] = useState("Niet betaald");
    const navigate = useNavigate();
    
    const CreateInvoice = () => {
        const data = new Invoice(String(getLastInvoiceIndex() + 1), Number(getLastInvoiceIndex()) + 1, invoiceName, invoiceDescription, Number(invoicePrice), invoiceDate, null, invoiceRepeat, invoiceStatus, null);
        postInvoiceData(data);
    }

    const EditInvoice = () => {
        const data = new Invoice(invoice.id, invoice.InvoiceId, invoiceName, invoiceDescription, Number(invoicePrice), invoiceDate, invoice.InvoiceNextDate, invoiceRepeat, invoiceStatus, invoice.NextInvoice);
        putInvoiceData(data);
    }

    useEffect(() => {
        if (isEditing){
            setInvoiceName(invoice.InvoiceName);
            setInvoiceDescription(invoice.InvoiceDescription);
            setInvoicePrice(invoice.InvoicePrice);
            setInvoiceDate(invoice.InvoiceDate);
            setInvoiceRepeat(invoice.InvoiceRepeat);
            setInvoiceStatus(invoice.InvoiceStatus)
        }
        // eslint-disable-next-line
    }, [invoice])

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
                    <DropdownList Label={`Repeat: ${invoiceRepeat}`} styling={"btn btn-secondary dropdown-toggle"}>
                        <DropdownItem event={() => setInvoiceRepeat("Niet")} value={"Niet"}/>
                        <DropdownItem event={() => setInvoiceRepeat("wekelijks")} value={"wekelijks"}/>
                        <DropdownItem event={() => setInvoiceRepeat("maandelijks")} value={"maandelijks"}/>
                        <DropdownItem event={() => setInvoiceRepeat("3 maandelijks")} value={"3 maandelijks"}/>
                        <DropdownItem event={() => setInvoiceRepeat("6 maandelijks")} value={"6 maandelijks"}/>
                        <DropdownItem event={() => setInvoiceRepeat("jaarlijks")} value={"jaarlijks"}/>
                    </DropdownList>
                </div>
                <div>
                    <label for="Status">Status:</label>
                    <DropdownList Label={`Status: ${invoiceStatus}`} styling={"btn btn-secondary dropdown-toggle"}>
                        <DropdownItem event={() => setInvoiceStatus("Niet betaald")} value={"Niet betaald"}/>
                        <DropdownItem event={() => setInvoiceStatus("betaaldt")} value={"betaald"}/>
                        <DropdownItem event={() => setInvoiceStatus("geanulleerd")} value={"geanulleerd"}/>
                        <DropdownItem event={() => setInvoiceStatus("Geld terug")} value={"Geld terug"}/>
                    </DropdownList>
                </div>
                {isEditing === true ? (
                    <button onClick={() => {EditInvoice(); navigate("/facturen")}}>Edit Invoice</button>
                ) : (
                    <button onClick={() => {CreateInvoice(); navigate("/facturen")}}>Maak Invoice</button>
                )}
            </div>
        </>
    );
};

export default InvoiceCreateBody;