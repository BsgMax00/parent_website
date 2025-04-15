import { useState } from "react";
import Pagination from "./Pagination";

import { Search } from "@mui/icons-material";

const Table = ({
    search = () => {},
    createButton = () => null,
    tableHeaders = [],
    tableData = [],
    handleSort = () => {},
    sortingOption = {key: "", direction: "asc"},
    renderRow = () => null,
    emptyMessage = "geen text",
    includeActionColumn = false,
    paginationData = [],
    arrayIndex = null,
    setArrayIndex = () => {}
}) => {
    const [ searchOption, setSearchOption ] = useState("")

    return (
        <>
            <div className="d-flex justify-content-between m-3">
                <div className="input-group" style={{ width: "30%" }}>
                    <input type="text" placeholder="Search..." className="form-control" onChange={(e) => setSearchOption(e.target.value)}/>
                    <button type="button" className="btn btn-primary" onClick={() => search(searchOption)}>
                        <Search/>
                    </button>
                </div>
                {createButton}
            </div>
            <div className="card rounded m-3">
                <div className="card-body p-0">
                    <div className="table-responsive table-card">
                        <table className="table table-striped table-hover align-middle table-nowrap mb-0" style={{ tableLayout: "fixed", width: "100%"}}>
                            <thead>
                                <tr className="fw-bold">
                                    {tableHeaders.map(({ label, key }, index) => (
                                        <th key={index} scope="col" onClick={() => handleSort(key)}>{label} {sortingOption.key === key && (sortingOption.direction === "asc" ? '▲' : '▼')}</th>
                                    ))}
                                    {includeActionColumn && (
                                        <th scope="col" className="text-center" style={{ width: "10%" }}>Actie</th>
                                    )}
                                </tr>
                            </thead>
                            <tbody>
                                {Array.isArray(tableData) ? (
                                    tableData.map((Invoice, index) => renderRow(Invoice, index))
                                ) : (
                                    <tr>
                                        <td colSpan={(includeActionColumn ? tableHeaders.length : tableHeaders.length - 1)} style={{ textAlign: 'center' }}>
                                            {emptyMessage}
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Pagination data={paginationData} arrayIndex={arrayIndex} setArrayIndex={setArrayIndex}/>
        </>
    )
}

export default Table;