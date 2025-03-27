import { serviceGetInvoiceData } from "../Services/InvoiceService";
import { createContext, useEffect, useState } from "react";

export const InvoiceContext = createContext();

export const InvoiceProvider = ({ children }) => {
    const [ invoiceData, setInvoiceData ] = useState([]);
    const [ invoiceChunks, setInvoiceChunks ] = useState(10);

    const getInvoiceData = async () => {
        const data = await serviceGetInvoiceData(invoiceChunks);
        console.log(data)
        setInvoiceData(data);
    }

    useEffect(() => {
        getInvoiceData();
        // eslint-disable-next-line
    }, [invoiceChunks])

    return (
        <InvoiceContext.Provider value={{ invoiceData, setInvoiceData, invoiceChunks, setInvoiceChunks }}>
            {children}
        </InvoiceContext.Provider>
    )
}