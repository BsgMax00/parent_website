import { useContext, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

import { InvoiceContext } from "../../Contexts/InvoiceContext";

import InvoiceRow from "./InvoiceRow";
import InvoiceManagmentBodyDropdown from "./InvoiceManagmentDropdown"
import InvoiceManagmentDropdownItem from "./InvoiceManagmentDropdownItem";

const InvoiceManagmentBody = () => {
    const [ ArrayIndex, setArrayIndex ] = useState(0);
    const [ chunkedInvoiceData, setChunkedInvoiceData ] = useState([]);
    const [ sortingOption, setSortingOption ] = useState("naam asc");
    const { invoiceData } = useContext(InvoiceContext);

    const chunkInvoiceData = ( invoices ) => {
        const InvoiceDataChunked = [];
        const data = [...invoices].sort((a, b) => {
            if(sortingOption === "naam asc") { return a.InvoiceName.localeCompare(b.InvoiceName, undefined, { numeric: true, sensitivity: "base" }); }
            if(sortingOption === "naam desc") { return b.InvoiceName.localeCompare(a.InvoiceName, undefined, { numeric: true, sensitivity: "base" }); }
            if(sortingOption === "prijs asc") { return a.InvoicePrice - b.InvoicePrice; }
            if(sortingOption === "prijs desc") { return b.InvoicePrice - a.InvoicePrice; }
            if(sortingOption === "datum asc") { return new Date(a.InvoiceDate).getTime() - new Date(b.InvoiceDate).getTime(); }
            if(sortingOption === "datum desc") { return new Date(b.InvoiceDate).getTime() - new Date(a.InvoiceDate).getTime(); }
            if(sortingOption === "status") { return a.InvoiceStatus.localeCompare(b.InvoiceStatus, undefined, { numeric: true, sensitivity: "base" }); }
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
        <div className="col-12">
            <div className="container-fluid pt-3">
                {Array.isArray(chunkedInvoiceData[ArrayIndex]) ? (
                    <div className="d-flex align-items-center justify-content-between">
                        <InvoiceManagmentBodyDropdown Label={`sorteer op: ${sortingOption}`}>
                            <InvoiceManagmentDropdownItem event={() => setSortingOption("naam asc")} value={"naam asc"}/>
                            <InvoiceManagmentDropdownItem event={() => setSortingOption("naam desc")} value={"naam desc"}/>
                            <InvoiceManagmentDropdownItem event={() => setSortingOption("prijs asc")} value={"prijs asc"}/>
                            <InvoiceManagmentDropdownItem event={() => setSortingOption("prijs desc")} value={"prijs desc"}/>
                            <InvoiceManagmentDropdownItem event={() => setSortingOption("datum asc")} value={"datum asc"}/>
                            <InvoiceManagmentDropdownItem event={() => setSortingOption("datum desc")} value={"datum desc"}/>
                            <InvoiceManagmentDropdownItem event={() => setSortingOption("status")} value={"status"}/>
                        </InvoiceManagmentBodyDropdown>
                        <a href="/facturen/aanmaken">Maak factuur</a>
                    </div>
                ) : (
                    <div className="d-flex align-middle justify-content-end">
                        <a href="/facturen/aanmaken">Maak factuur</a>
                    </div>
                )}
                <div className="card rounded-0 shadow-lg mt-2">
                    <div className="card-body p-0">
                        <div className="table-responsive table-card">
                            <table className="table table-striped table-hover align-middle table-nowrap mb-0" style={{ tableLayout: "fixed", width: "100%"}}>
                                <thead>
                                    <tr className="fw-bold">
                                        <th scope="col" style={{ width: "18%" }}>Naam</th>
                                        <th scope="col" style={{ width: "18%" }}>Datum</th>
                                        <th scope="col" style={{ width: "18%" }}>Prijs</th>
                                        <th scope="col" style={{ width: "18%" }}>Repeat</th>
                                        <th scope="col" style={{ width: "18%" }}>Status</th>
                                        <th scope="col" className="text-center" style={{ width: "10%" }}>Actie</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Array.isArray(chunkedInvoiceData[ArrayIndex]) ? (
                                        chunkedInvoiceData[ArrayIndex].map((Invoice, index) => (
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
                <div className="d-flex justify-content-end mt-2">
                    <div>
                        {ArrayIndex !== 0 ? (<button onClick={() => {setArrayIndex(ArrayIndex - 1)}}><ChevronLeft/></button>) : (<></>)}
                        {ArrayIndex !== chunkedInvoiceData.length - 1 && ArrayIndex !== 0 ? (<button onClick={() => {setArrayIndex(ArrayIndex + 1)}}><ChevronRight/></button>) : (<></>)}
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default InvoiceManagmentBody;