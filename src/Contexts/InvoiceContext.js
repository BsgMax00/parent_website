import { serviceGetInvoiceData } from "../Services/InvoiceService";
import { createContext, useEffect, useState } from "react";

export const InvoiceContext = createContext();

export const InvoiceProvider = ({ children }) => {
    const [ invoiceData, setInvoiceData ] = useState([]);
    const [ invoiceChunks, setInvoiceChunks ] = useState(10);

    const getInvoiceData = () => {
        const data = serviceGetInvoiceData(invoiceChunks);
        setInvoiceData(data);
    }

    useEffect(() => {
        getInvoiceData();
    }, [invoiceChunks])

    return (
        <InvoiceContext.Provider value={{ invoiceData, setInvoiceData, invoiceChunks, setInvoiceChunks }}>
            {children}
        </InvoiceContext.Provider>
    )
}