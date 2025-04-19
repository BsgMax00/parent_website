import { useContext } from "react";
import { InvoiceContext } from "../../../Contexts/InvoiceContext";

import { MoreHoriz } from "@mui/icons-material";

import DropdownList from "../../dropdown/DropdownList";
import DropdownItem from "../../dropdown/DropdownItem";
import { useNavigate } from "react-router-dom";

const InvoiceRow = ({ Invoice, showActionButton = true }) => {
    const { deleteInvoiceData } = useContext(InvoiceContext);
    const navigate = useNavigate();

    const ellipsisCell = {
        display: "block",
        alignItems: "center",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
    }

    return (
        <>
            <tr title={Invoice.invoiceDescription} onClick={() => navigate(`/facturen/${Invoice.invoiceId}`)}>
                <td><div style={ellipsisCell}>{Invoice.invoiceName}</div></td>
                <td><div style={ellipsisCell}>{Invoice.invoiceDate}</div></td>
                <td><div style={ellipsisCell}>€ {Invoice.invoicePrice.toFixed(2)}</div></td>
                <td><div style={ellipsisCell}>{Invoice.invoiceRepeat}</div></td>
                <td><div style={ellipsisCell}>{Invoice.invoiceStatus}</div></td>
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

export default InvoiceRow;