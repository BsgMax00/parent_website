import { useContext } from "react";
import { InvoiceContext } from "../../Contexts/InvoiceContext";

import { MoreHoriz } from "@mui/icons-material";

import DropdownList from "../dropdown/DropdownList";
import DropdownItem from "../dropdown/DropdownItem";

const InvoiceRow = ({ Invoice }) => {
    const { deleteInvoiceData } = useContext(InvoiceContext);

    const ellipsisCell = {
        display: "block",
        alignItems: "center",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
    }

    return (
        <>
            <tr title={Invoice.InvoiceDescription}>
                <td><div style={ellipsisCell}>{Invoice.InvoiceName}</div></td>
                <td><div style={ellipsisCell}>{Invoice.InvoiceDate}</div></td>
                <td><div style={ellipsisCell}>€ {Invoice.InvoicePrice}</div></td>
                <td><div style={ellipsisCell}>{Invoice.InvoiceRepeat}</div></td>
                <td><div style={ellipsisCell}>{Invoice.InvoiceStatus}</div></td>
                <td className="text-center">
                    <DropdownList Label={<MoreHoriz/>} styling={"btn border"}>
                        <DropdownItem event={() => {}} value={"Bewerken"}/>
                        <DropdownItem event={() => {deleteInvoiceData(Invoice.InvoiceId)}} value={"Verwijderen"}/>
                    </DropdownList>
                </td>
            </tr>
        </>
    );
};

export default InvoiceRow;