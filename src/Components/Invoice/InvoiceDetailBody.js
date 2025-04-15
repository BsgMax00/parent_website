const InvoiceDetailBody = ({ invoice }) => {
    if (invoice == null) return null;

    return (
        <>
            <div className="card rounded m-2">
                <div className="card-body shadow-lg">
                    <div className="d-flex mb-3">
                        <label htmlFor="Name" className="me-2 mb-0 fw-semibold">Naam: </label>
                        <p  id="Name" name="Name" className="mb-0">{invoice.InvoiceName}</p>
                    </div>
                    <div className="d-flex mb-3">
                        <label htmlFor="Description" className="me-2 mb-0 fw-semibold">Descriptie: </label>
                        <p  id="Description" name="Description" className="mb-0">{invoice.InvoiceDescription}</p>
                    </div>
                    <div className="d-flex mb-3">
                        <label htmlFor="Price" className="me-2 mb-0 fw-semibold">Prijs: </label>
                        <p  id="Price" name="Price" className="mb-0">{invoice.InvoicePrice}</p>
                    </div>
                    <div className="d-flex mb-3">
                        <label htmlFor="Date" className="me-2 mb-0 fw-semibold">Datum: </label>
                        <p  id="Date" name="Date" className="mb-0">{invoice.InvoiceDate}</p>
                    </div>
                    {invoice.InvoiceEndDate && (
                        <div className="d-flex mb-3">
                            <label htmlFor="EndDate" className="me-2 mb-0 fw-semibold">EindDatum: </label>
                            <p  id="EndDate" name="EndDate" className="mb-0">{invoice.InvoiceEndDate}</p>
                        </div>
                    )}
                    <div className="d-flex mb-3">
                        <label htmlFor="Repeat" className="me-2 mb-0 fw-semibold">Repeat: </label>
                        <p  id="Repeat" name="Repeat" className="mb-0">{invoice.InvoiceRepeat}</p>
                    </div>
                    <div className="d-flex mb-3">
                        <label htmlFor="Status" className="me-2 mb-0 fw-semibold">Status: </label>
                        <p  id="Status" name="Status" className="mb-0">{invoice.InvoiceStatus}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default InvoiceDetailBody;