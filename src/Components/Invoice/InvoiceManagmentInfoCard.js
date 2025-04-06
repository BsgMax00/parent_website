const InvoiceManagmentBodyInfoCard = ({ CardIcon, cardData, cardText }) => {
    return (
        <>
            <div className="col-4 p-2">
                <div className="card m-2" style={{height: "125px"}}>
                    <div className="card-body shadow-sm d-flex align-items-center p-3">
                        <div className="col-3 d-flex justify-content-center">
                            <CardIcon style={{height: "75px", width: "75px"}}/>
                        </div>
                        <div className="col-8 d-flex flex-column justify-content-center">
                            <h4 className="mb-1">{cardData}</h4>
                            <h5 className="text-muted">{cardText}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default InvoiceManagmentBodyInfoCard;