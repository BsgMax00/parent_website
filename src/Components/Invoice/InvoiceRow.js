const InvoiceRow = ({ Invoice }) => {
    return (
        <>
            <div className="col-12">
                <div className="row p-2">
                    <input type="checkbox" className="col-1"/>
                    <div className="col-2">{Invoice.invoiceNr}</div>
                    <div className="col-2">{Invoice.name}</div>
                    <div className="col-2">{Invoice.price}</div>
                    <div className="col-2">{Invoice.date}</div>
                    <div className="col-2">{Invoice.status}</div>
                    {Invoice.download ? (
                        <div className="col-1">True</div>
                    ) : (
                        <div className="col-1">False</div>
                    )}
                </div>
            </div>
            <hr className="m-0"/>
        </>
    );
};

export default InvoiceRow;