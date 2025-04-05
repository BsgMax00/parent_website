import InvoiceManagmentBody from "../Components/Invoice/InvoiceManagmentBody";
import InvoiceManagmentBodyInfoCard from "../Components/Invoice/InvoiceManagmentInfoCard";

import { Assignment, CheckCircle, Error } from "@mui/icons-material";
import { useContext } from "react";
import { InvoiceContext } from "../Contexts/InvoiceContext";

const InvoiceManagment = () => {
    const { invoiceData } = useContext(InvoiceContext);

    const invoiceUnpaidAmount = () => {
        const data = [...invoiceData].filter((e) => e.InvoiceStatus === "Niet betaald");
        return data.length;
    }

    const invoicePaidAmount = () => {
        const data = [...invoiceData].filter((e) => e.InvoiceStatus !== "Niet betaald");
        return data.length;
    }

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <InvoiceManagmentBodyInfoCard CardIcon={Assignment} cardData={invoiceData.length} cardText="Alle facturen"/>
                    <InvoiceManagmentBodyInfoCard CardIcon={CheckCircle} cardData={invoiceUnpaidAmount()} cardText="Niet betaalde facturen"/>
                    <InvoiceManagmentBodyInfoCard CardIcon={Error} cardData={invoicePaidAmount()} cardText="betaalde facturen"/>
                </div>
                <div className="row">
                    <InvoiceManagmentBody/>
                </div>
            </div>
        </>
    );
};

export default InvoiceManagment;