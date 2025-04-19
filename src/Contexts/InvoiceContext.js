import { serviceGetInvoiceData, servicePostInvoiceData, serviceDeleteInvoiceData, servicePutInvoiceData } from "../Services/InvoiceService";
import { createContext, useEffect, useState } from "react";

export const InvoiceContext = createContext();

export const InvoiceProvider = ({ children }) => {
    const [ invoiceData, setInvoiceData ] = useState([]);
    const [ isEditing, setIsEditing ] = useState(false);

    const getLastInvoiceIndex = () => {
        const length = invoiceData.length;
        if (length === 0){
            return -1;
        };
        
        return invoiceData[length - 1].invoiceId;
    }

    const getInvoiceData = async () => {
        const InvoiceData = await serviceGetInvoiceData();
        setInvoiceData(InvoiceData);
    }

    const deleteInvoiceData = async ( invoiceId ) => {
        await serviceDeleteInvoiceData(invoiceId);
        await getInvoiceData();
    }

    const postInvoiceData = async ( newInvoice ) => {
        await servicePostInvoiceData(newInvoice);
        await getInvoiceData();
    }

    const putInvoiceData = async ( editedInvoice ) => {
        await servicePutInvoiceData(editedInvoice);
        await getInvoiceData();
    }

    const convertDate = ( invoiceDate ) => {
        const day = invoiceDate.substring(0,2);
        const month = invoiceDate.substring(3,5);
        const year = invoiceDate.substring(6,12);

        return new Date(Number(year), Number(month) - 1, Number(day));
    }

    useEffect(() => {
        getInvoiceData();
        // eslint-disable-next-line
    }, [])

    return (
        <InvoiceContext.Provider value={{ invoiceData, setInvoiceData, isEditing, setIsEditing, getLastInvoiceIndex, postInvoiceData, deleteInvoiceData, putInvoiceData, convertDate }}>
            {children}
        </InvoiceContext.Provider>
    )
}