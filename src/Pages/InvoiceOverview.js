import InvoiceOverviewBody from "../Components/Invoice/InvoiceOverviewBody";
import InvoiceInfoCard from "../Components/Invoice/InvoiceInfoCard";

import { Assignment, CheckCircle, Error } from "@mui/icons-material";
import { useContext } from "react";
import { InvoiceContext } from "../Contexts/InvoiceContext";

const InvoiceOverview = () => {
    const { invoiceData } = useContext(InvoiceContext);

    const invoiceUnpaidAmount = () => {
        const data = [...invoiceData].filter((e) => e.invoiceStatus === "Niet betaald");
        return data.length;
    }

    const invoicePaidAmount = () => {
        const data = [...invoiceData].filter((e) => e.invoiceStatus !== "Niet betaald");
        return data.length;
    }

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <InvoiceInfoCard CardIcon={Assignment} cardData={invoiceData.length} cardText="Alle facturen"/>
                    <InvoiceInfoCard CardIcon={CheckCircle} cardData={invoiceUnpaidAmount()} cardText="Niet betaalde facturen"/>
                    <InvoiceInfoCard CardIcon={Error} cardData={invoicePaidAmount()} cardText="betaalde facturen"/>
                </div>
                <div className="row">
                    <InvoiceOverviewBody/>
                </div>
            </div>
        </>
    );
};

export default InvoiceOverview;