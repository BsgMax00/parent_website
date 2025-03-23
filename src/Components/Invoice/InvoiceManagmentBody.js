import { useState } from "react";
import { TestData } from "../../data/testData";
import InvoiceRow from "./InvoiceRow";

import { ChevronLeft, ChevronRight } from "@mui/icons-material";

const InvoiceManagmentBody = () => {
    const [ ArrayIndex, setArrayIndex ] = useState(0);

    const addArray = () => {
        setArrayIndex(ArrayIndex + 1)
    }

    const minusArray = () => {
        setArrayIndex(ArrayIndex - 1)
    }

    return (
        <>
        <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="container-fluid">
                <div className="card rounded-0 shadow-lg">
                    <div className="card-body p-0">
                        <div className="table-responsive table-card">
                            <table className="table table-striped table-hover align-middle table-nowrap mb-0">
                                <thead>
                                    <tr className="fw-bold">
                                        <th scope="col" style={{ width: "50px" }}>
                                            <div className="form-check m-0 d-flex justify-content-center">
                                            <input className="form-check-input" type="checkbox" />
                                            </div>
                                        </th>
                                        <th scope="col" style={{ width: "35%" }}>Naam</th>
                                        <th scope="col">Prijs</th>
                                        <th scope="col" style={{ width: "20%" }}>Datum</th>
                                        <th scope="col" style={{ width: "17%" }}>Status</th>
                                        <th scope="col" className="text-center" style={{ width: "5%" }}>Actie</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {TestData[ArrayIndex].map((Invoice, index) => {
                                        return (
                                            <InvoiceRow key={index} Invoice={Invoice}/>
                                        )
                                    })} 
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-between mt-2">
                    <p>Test 1</p>
                    <div>
                        {ArrayIndex !== 0 ? (<button onClick={minusArray}><ChevronLeft/></button>) : (<></>)}
                        {ArrayIndex !== TestData.length - 1 ? (<button onClick={addArray}><ChevronRight/></button>) : (<></>)}
                    </div>
                </div>
                <div className="d-flex justify-content-between align-items-center text-center">
                    
                </div>
            </div>
        </div>
        </>
    )
}

export default InvoiceManagmentBody;