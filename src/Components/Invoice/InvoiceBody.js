import { TestData } from "../../data/testData";
import InvoiceRow from "./InvoiceRow";

const InvoiceBody = () => {
    return (
        <>
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
                                        <th scope="col" style={{ width: "10%" }}>Factuur nummer</th>
                                        <th scope="col">Naam</th>
                                        <th scope="col">Prijs</th>
                                        <th scope="col">Datum</th>
                                        <th scope="col">Termijn</th>
                                        <th scope="col">Status</th>
                                        <th scope="col" className="text-center" style={{ width: "5%" }}>Actie</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {TestData.map((Invoice, index) => {
                                        return (
                                            <InvoiceRow key={index} Invoice={Invoice}/>
                                        )
                                    })} 
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InvoiceBody;