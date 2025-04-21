import { useContext, useEffect, useState } from "react";
import { InvoiceContext } from "../../Contexts/InvoiceContext";

import InvoiceRow from "../Table/Rows/InvoiceRow";
import Table from "../Table/Table";

const InvoiceOverviewBody = () => {
    const [ chunkedInvoiceData, setChunkedInvoiceData ] = useState([]);
    const [ searchSorting, setSearchSorting ] = useState(null);
    const [ sortingOption, setSortingOption ] = useState({key: "date", direction: "desc"});
    const [ arrayIndex, setArrayIndex ] = useState(0)
    const { invoiceData, convertCalendarDate } = useContext(InvoiceContext);
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

    const chunkInvoiceData = () => {
        const InvoiceDataChunked = [];
        let data = [...invoiceData].sort((a, b) => {
            if (sortingOption.key === "name") {
                if (sortingOption.direction === "asc"){ return a.invoiceName.localeCompare(b.invoiceName, undefined, { numeric: true, sensitivity: "base" }); }
                else{ return b.invoiceName.localeCompare(a.invoiceName, undefined, { numeric: true, sensitivity: "base" }); }
            }
            if (sortingOption.key === "price"){
                if (sortingOption.direction === "asc"){ return a.invoicePrice - b.invoicePrice; }
                else{ return b.invoicePrice - a.invoicePrice; }
            }
            if (sortingOption.key === "date"){
                if (sortingOption.direction === "asc"){ return convertCalendarDate(a.invoiceDate).getTime() - convertCalendarDate(b.invoiceDate).getTime(); }
                else { return convertCalendarDate(b.invoiceDate).getTime() - convertCalendarDate(a.invoiceDate).getTime(); }
            }
            if (sortingOption.key === "repeat"){
                if (sortingOption.direction === "asc"){ return a.invoiceRepeat.localeCompare(b.invoiceRepeat, undefined, { numeric: true, sensitivity: "base" }); }
                else { return b.invoiceRepeat.localeCompare(a.invoiceRepeat, undefined, { numeric: true, sensitivity: "base" }); }
            }
            if (sortingOption.key === "status"){
                if (sortingOption.direction === "asc"){ return a.invoiceStatus.localeCompare(b.invoiceStatus, undefined, { numeric: true, sensitivity: "base" }); }
                else { return b.invoiceStatus.localeCompare(a.invoiceStatus, undefined, { numeric: true, sensitivity: "base" }); }
            }
            return 0;
        });

        if (searchSorting !== null){
            data = [...data].filter((e) => e.invoiceName.toLowerCase().includes(searchSorting.toLowerCase()))
        }
    
        for (let i = 0; i < data.length; i += 10) {
            InvoiceDataChunked.push(data.slice(i, i + 10));
        };
    
        return InvoiceDataChunked;
    }

    useEffect(() => {
        setChunkedInvoiceData(chunkInvoiceData());
        setArrayIndex(0);
        // eslint-disable-next-line
    }, [invoiceData, sortingOption, searchSorting])

    return (
        <>
            <div className="col-12 px-2">
                <div className="card m-2">
                    <div className="card-body shadow-lg">
                        <Table
                            search={setSearchSorting}
                            createButton={() => (
                                <a href="/facturen/aanmaken" className="btn btn-primary">Maak factuur</a>
                            )}
                            tableHeaders = {tableHeaders}
                            tableData = {chunkedInvoiceData[arrayIndex] || []}
                            handleSort = {handleSort}
                            sortingOption={sortingOption}
                            renderRow = {(Invoice, index) => (
                                <InvoiceRow key={index} Invoice={Invoice}/>
                            )}
                            emptyMessage = "Geen facturen gevonden."
                            includeActionColumn = {true}
                            paginationData={chunkedInvoiceData || []}
                            arrayIndex={arrayIndex}
                            setArrayIndex={setArrayIndex}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default InvoiceOverviewBody;