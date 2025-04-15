import { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { InvoiceContext } from "../Contexts/InvoiceContext"

import InvoiceDetailBody from "../Components/Invoice/InvoiceDetailBody";

const InvoiceDetail = () => {
    const { invoiceData } = useContext(InvoiceContext);
    const [ invoice, setInvoice ] = useState(null);
    const {InvoiceId} = useParams()

    useEffect(() => {
        const invoice = invoiceData.find(invoice => invoice.InvoiceId === Number(InvoiceId));
        setInvoice(invoice);
        // eslint-disable-next-line
    }, [invoiceData])

    return (
        <>
            {invoice !== null && (
                <InvoiceDetailBody invoice={invoice}/>
            )}
        </>
    );
};

export default InvoiceDetail;