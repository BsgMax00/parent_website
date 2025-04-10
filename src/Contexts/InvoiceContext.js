import { serviceGetInvoiceData, servicePostInvoiceData, serviceDeleteInvoiceData, servicePutInvoiceData } from "../Services/InvoiceService";
import { createContext, useEffect, useState } from "react";

export const InvoiceContext = createContext();

export const InvoiceProvider = ({ children }) => {
    const [ invoiceData, setInvoiceData ] = useState([]);
    const [ arrayIndex, setArrayIndex ] = useState(0);
    const [ isEditing, setIsEditing ] = useState(false);

    const getLastInvoiceIndex = () => {
        const length = invoiceData.length;
        if (length === 0){
            return -1;
        };
        
        return invoiceData[length - 1].InvoiceId;
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
        console.log(editedInvoice)
        await servicePutInvoiceData(editedInvoice);
        await getInvoiceData();
    }

    useEffect(() => {
        getInvoiceData();
        // eslint-disable-next-line
    }, [])

    return (
        <InvoiceContext.Provider value={{ invoiceData, setInvoiceData, arrayIndex, setArrayIndex, isEditing, setIsEditing, postInvoiceData, deleteInvoiceData, putInvoiceData, getLastInvoiceIndex }}>
            {children}
        </InvoiceContext.Provider>
    )
}