const InvoiceManagmentBodyInfoCard = ({ CardIcon, cardData, cardText }) => {
    return (
        <>
            <div className="col-3 p-0">
                <div className="border rounded bg-light align-items-center row m-2" style={{height: "125px"}}>
                    <div className="col-3">
                        <CardIcon style={{height: "75px", width: "75px"}}/>
                    </div>
                    <div className="col-9 align-items-center">
                        <h4>{cardData}</h4>
                        <h5>{cardText}</h5>
                    </div>
                </div>
            </div>
        </>
    );
};

export default InvoiceManagmentBodyInfoCard;