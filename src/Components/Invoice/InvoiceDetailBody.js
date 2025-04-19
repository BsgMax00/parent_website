import { useContext, useEffect, useState } from "react";
import { InvoiceContext } from "../../Contexts/InvoiceContext";

import Table from "../Table/Table";
import InvoiceRow from "../Table/Rows/InvoiceRow";

const InvoiceDetailBody = ({ invoice }) => {
    const { invoiceData } = useContext( InvoiceContext )
    const [ sortingOption, setSortingOption ] = useState({key: null, direction: "asc"});
    const [ arrayIndex, setArrayIndex ] = useState(0)
    const [ relatedInvoices, setRelatedInvoices ] = useState([])

    const tableHeaders = [
        { label: "Naam", key: "name" },
        { label: "Datum", key: "date" },
        { label: "Prijs", key: "price" },
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

    const chunkRelatedInvoiceData = () => {
        const NextInvoiceChunked = [];
        let data = [...invoiceData].filter((e) => e.groupId !== null && e.groupId === invoice.groupId && e.invoiceId !== invoice.invoiceId)
        data = [...data].sort((a, b) => {
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
                else { return b.InvoiceStatus.localeCompare(a.InvoiceStatus, undefined, { numeric: true, sensitivity: "base" }); }
            }
            return 0;
        });

        for (let i = 0; i < data.length; i += 10) {
            NextInvoiceChunked.push(data.slice(i, i + 10));
        };

        return NextInvoiceChunked;
    }

    useEffect(() => {
        if (invoice){
            setRelatedInvoices(chunkRelatedInvoiceData())
        }
        // eslint-disable-next-line
    }, [invoiceData, invoice, sortingOption])

    if (invoice == null) return null;
    else return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 pt-0 p-2">
                        <div className="card rounded mt-0 m-2">
                            <div className="card-body shadow-lg">
                                <div className="d-flex mb-3">
                                    <label htmlFor="Name" className="me-2 mb-0 fw-semibold">Naam: </label>
                                    <p  id="Name" name="Name" className="mb-0">{invoice.invoiceName}</p>
                                </div>
                                <div className="d-flex mb-3">
                                    <label htmlFor="Description" className="me-2 mb-0 fw-semibold">Descriptie: </label>
                                    <p  id="Description" name="Description" className="mb-0">{invoice.invoiceDescription}</p>
                                </div>
                                <div className="d-flex mb-3">
                                    <label htmlFor="Price" className="me-2 mb-0 fw-semibold">Prijs: </label>
                                    <p  id="Price" name="Price" className="mb-0">{invoice.invoicePrice.toFixed(2)}</p>
                                </div>
                                <div className="d-flex mb-3">
                                    <label htmlFor="Date" className="me-2 mb-0 fw-semibold">Datum: </label>
                                    <p  id="Date" name="Date" className="mb-0">{invoice.invoiceDate}</p>
                                </div>
                                {invoice.invoiceEndDate && (
                                    <div className="d-flex mb-3">
                                        <label htmlFor="EndDate" className="me-2 mb-0 fw-semibold">EindDatum: </label>
                                        <p  id="EndDate" name="EndDate" className="mb-0">{invoice.invoiceEndDate}</p>
                                    </div>
                                )}
                                <div className="d-flex mb-3">
                                    <label htmlFor="Repeat" className="me-2 mb-0 fw-semibold">Repeat: </label>
                                    <p  id="Repeat" name="Repeat" className="mb-0">{invoice.invoiceRepeat}</p>
                                </div>
                                <div className="d-flex mb-3">
                                    <label htmlFor="Status" className="me-2 mb-0 fw-semibold">Status: </label>
                                    <p  id="Status" name="Status" className="mb-0">{invoice.invoiceStatus}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {relatedInvoices.length >= 1 && (
                    <div className="row">
                        <div className="col-12 px-2">
                            <div className="card rounded m-2">
                                <div className="card-body shadow-lg">
                                    <div className="d-flex justify-content-center">
                                        <h2>Facturen</h2>
                                    </div>
                                    <Table
                                    tableHeaders={tableHeaders}
                                    tableData={relatedInvoices[arrayIndex] || []}
                                    handleSort={handleSort}
                                    sortingOption={sortingOption}
                                    renderRow = {(Invoice, index) => (
                                        <InvoiceRow key={index} Invoice={Invoice} showActionButton={false}/>
                                    )}
                                    emptyMessage="Geen facturen gevonden."
                                    includeActionColumn = {false}
                                    paginationData={relatedInvoices || []}
                                    arrayIndex={arrayIndex}
                                    setArrayIndex={setArrayIndex}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default InvoiceDetailBody;