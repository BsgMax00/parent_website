import { useContext } from "react";
import { InvoiceContext } from "../../../Contexts/InvoiceContext";
import { useNavigate } from "react-router-dom";
import { MoreHoriz, CheckCircle, Error } from "@mui/icons-material";

import DropdownList from "../../dropdown/DropdownList";
import DropdownItem from "../../dropdown/DropdownItem";

const ellipsisCell = {
    display: "block",
    alignItems: "center",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
}

const InvoiceRow = ({ Invoice, showActionButton = true }) => {
    const { deleteInvoiceData } = useContext(InvoiceContext);
    const navigate = useNavigate();

    return (
        <>
            <tr title={Invoice.invoiceDescription} onClick={() => navigate(`/facturen/${Invoice.invoiceId}`)}>
                <td><div className="fw-bold" style={ellipsisCell}>{Invoice.invoiceName}</div></td>
                <td><div style={ellipsisCell}>{Invoice.invoiceDate}</div></td>
                <td><div style={ellipsisCell}>€ {Invoice.invoicePrice.toFixed(2)}</div></td>
                <td><div style={ellipsisCell}>{Invoice.invoiceRepeat}</div></td>
                {renderStatus(Invoice.invoiceStatus)}
                {showActionButton && (
                    <td className="text-center" onClick={(e) => e.stopPropagation()}>
                        <DropdownList Label={<MoreHoriz/>} styling={"btn border"}>
                            <DropdownItem event={() => navigate(`/facturen/aanmaken/${Invoice.invoiceId}`)} value={"Bewerken"}/>
                            <DropdownItem event={() => deleteInvoiceData(Invoice.invoiceId)} value={"Verwijderen"}/>
                        </DropdownList>
                    </td>
                )}
            </tr>
        </>
    );
};

const renderStatus = ( status ) => {
    switch(status){
        case "Betaald":
            return (
                <td><div className="d-flex align-items-center" style={ellipsisCell}><CheckCircle color="success"/>{status}</div></td>
            );
        case "Niet betaald":
            return (
                <td><div className="d-flex align-items-center" style={ellipsisCell}><Error color="error"/>{status}</div></td>
            );
        default:
            return (
                <td><div className="d-flex align-items-center" style={ellipsisCell}><Error color="warning"/>{status}</div></td>
            );
    }
}

export default InvoiceRow;