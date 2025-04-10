import { useContext, useEffect, useState } from "react";
import { InvoiceContext } from "../../Contexts/InvoiceContext";

import InvoiceRow from "./InvoiceRow";
import InvoiceManagmentPagination from "./InvoiceManagmentPagination";

const InvoiceManagmentBody = () => {
    const [ chunkedInvoiceData, setChunkedInvoiceData ] = useState([]);
    const [ sortingOption, setSortingOption ] = useState({key: null, direction: "asc"});
    const { invoiceData, arrayIndex, setArrayIndex } = useContext(InvoiceContext);
    const tableHeaders = [
        { label: "Naam", key: "name" },
        { label: "Prijs", key: "price" },
        { label: "Datum", key: "date" },
        { label: "Herhaling", key: "repeat" },
        { label: "Status", key: "status" }
    ]

    const handleSort = (key) => {
        let direction = "asc";
        if (sortingOption.key === key && sortingOption.direction === "asc"){
            direction = "desc";
        }

        setSortingOption({ key, direction })
    }

    const chunkInvoiceData = ( invoices ) => {
        const InvoiceDataChunked = [];
        const data = [...invoices].sort((a, b) => {
            if (sortingOption.key === "name") {
                if (sortingOption.direction === "asc"){ return a.InvoiceName.localeCompare(b.InvoiceName, undefined, { numeric: true, sensitivity: "base" }); }
                else{ return b.InvoiceName.localeCompare(a.InvoiceName, undefined, { numeric: true, sensitivity: "base" }); }
            }
            if (sortingOption.key === "price"){
                if (sortingOption.direction === "asc"){ return a.InvoicePrice - b.InvoicePrice; }
                else{ return b.InvoicePrice - a.InvoicePrice; }
            }
            if (sortingOption.key === "date"){
                if (sortingOption.direction === "asc"){ return new Date(a.InvoiceDate).getTime() - new Date(b.InvoiceDate).getTime(); }
                else { return new Date(b.InvoiceDate).getTime() - new Date(a.InvoiceDate).getTime(); }
            }
            if (sortingOption.key === "repeat"){
                if (sortingOption.direction === "asc"){ return a.InvoiceRepeat.localeCompare(b.InvoiceRepeat, undefined, { numeric: true, sensitivity: "base" }); }
                else { return b.InvoiceRepeat.localeCompare(a.InvoiceRepeat, undefined, { numeric: true, sensitivity: "base" }); }
            }
            if (sortingOption.key === "status"){
                if (sortingOption.direction === "asc"){ return a.InvoiceStatus.localeCompare(b.InvoiceStatus, undefined, { numeric: true, sensitivity: "base" }); }
                else { return b.InvoiceName.localeCompare(b.InvoiceStatus, undefined, { numeric: true, sensitivity: "base" }); }
            }
            return 0;
        });
    
        for (let i = 0; i < data.length; i += 10) {
            InvoiceDataChunked.push(data.slice(i, i + 10));
        };
    
        return InvoiceDataChunked;
    }

    useEffect(() => {
        setChunkedInvoiceData(chunkInvoiceData(invoiceData));
        setArrayIndex(0);
        // eslint-disable-next-line
    }, [invoiceData, sortingOption])

    return (
        <>
            <div className="col-12 px-2">
                <div className="card m-2">
                    <div className="card-body shadow-lg">
                        <div className="d-flex justify-content-end mb-2">
                            <a href="/facturen/aanmaken" className="btn btn-primary">Maak factuur</a>
                        </div>
                        <div className="card rounded-0 mt-2">
                            <div className="card-body p-0">
                                <div className="table-responsive table-card">
                                    <table className="table table-striped table-hover align-middle table-nowrap mb-0" style={{ tableLayout: "fixed", width: "100%"}}>
                                        <thead>
                                            <tr className="fw-bold">
                                                {tableHeaders.map(({ label, key }, index) => (
                                                    <th key={index} scope="col" style={{ width: "18%" }} onClick={() => handleSort(key)}>{label} {sortingOption.key === key && (sortingOption.direction === "asc" ? '▲' : '▼')}</th>
                                                ))}
                                                <th scope="col" className="text-center" style={{ width: "10%" }}>Actie</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {Array.isArray(chunkedInvoiceData[arrayIndex]) ? (
                                                chunkedInvoiceData[arrayIndex].map((Invoice, index) => (
                                                    <InvoiceRow key={index} Invoice={Invoice}/>
                                                ))
                                            ) : (
                                                <tr>
                                                    <td colSpan={6} style={{ textAlign: 'center' }}>
                                                        Geen facturen gevonden.
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <InvoiceManagmentPagination chunkedInvoiceData={chunkedInvoiceData}/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default InvoiceManagmentBody;