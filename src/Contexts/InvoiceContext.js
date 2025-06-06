import { serviceGetInvoiceData, servicePostInvoiceData, serviceDeleteInvoiceData, servicePutInvoiceData } from "../Services/InvoiceService";
import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext"

export const InvoiceContext = createContext();

export const InvoiceProvider = ({ children }) => {
    const { user } = useContext( UserContext );
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
        const InvoiceData = await serviceGetInvoiceData( user.userId );
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

    const convertCalendarDate = ( invoiceDate ) => {
        const day = String(invoiceDate).substring(0,2);
        const month = String(invoiceDate).substring(3,5);
        const year = String(invoiceDate).substring(6,12);

        return new Date(Number(year), Number(month) - 1, Number(day));
    }

    useEffect(() => {
        if (user){
            getInvoiceData();
        }
        // eslint-disable-next-line
    }, [user])

    return (
        <InvoiceContext.Provider value={{ invoiceData, setInvoiceData, isEditing, setIsEditing, getLastInvoiceIndex, postInvoiceData, deleteInvoiceData, putInvoiceData, convertCalendarDate }}>
            {children}
        </InvoiceContext.Provider>
    )
}