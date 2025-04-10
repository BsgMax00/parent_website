import { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { InvoiceContext } from "../Contexts/InvoiceContext"

import InvoiceCreateBody from "../Components/Invoice/InvoiceCreateBody";

const InvoiceCreate = () => {
    const { invoiceData, setIsEditing } = useContext(InvoiceContext);
    const [ toEditInvoice, setToEditInvoice ] = useState(null);
    const { InvoiceId } = useParams();

    useEffect(() => {
        const invoice = invoiceData.find(invoice => invoice.InvoiceId === Number(InvoiceId))
        if (invoice){
            setIsEditing(true);
            setToEditInvoice(invoice)
        }
        else{
            setIsEditing(false);
        }
        // eslint-disable-next-line
    }, [invoiceData]);

    return (
        <>
            <InvoiceCreateBody invoice={toEditInvoice}/>
        </>
    );
};

export default InvoiceCreate;