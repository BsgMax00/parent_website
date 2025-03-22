import { TestData } from "../../data/testData";
import InvoiceRow from "./InvoiceRow";

const InvoiceBody = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row text-center m-2">
                    <div className="col-12">
                        <div className="row border p-2 bg-light">
                            <input type="checkbox" className="col-1"/>
                            <div className="col-2 fw-bold">Factuur nummer</div>
                            <div className="col-2 fw-bold">Naam</div>
                            <div className="col-2 fw-bold">Prijs</div>
                            <div className="col-2 fw-bold">Datum</div>
                            <div className="col-2 fw-bold">Status</div>
                            <div className="col-1 fw-bold">Download</div>
                        </div>
                    </div>
                    {TestData.map((data, index) => {
                        return (
                            <InvoiceRow key={index} Invoice={data}/>
                        )
                    })}   
                </div>
            </div>
        </>
    )
}

export default InvoiceBody;