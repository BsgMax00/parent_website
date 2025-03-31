import { MoreHoriz } from "@mui/icons-material";
import { useState } from "react";

const InvoiceRow = ({ Invoice }) => {
    const [ checked, setChecked ] = useState(false)

    const ellipsisCell = {
        display: "block",
        alignItems: "center",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
    }

    return (
        <>
            <tr>
                <td>
                    <div>
                        <div className="form-check m-0 d-flex justify-content-center">
                            <input className="form-check-input" type="checkbox" value={checked}/>
                        </div>
                    </div>
                </td>
                <td><div style={ellipsisCell}>{Invoice.InvoiceName}</div></td>
                <td><div style={ellipsisCell}>{Invoice.InvoiceDate}</div></td>
                <td><div style={ellipsisCell}>€ {Invoice.InvoicePrice.toFixed(2)}</div></td>
                <td><div style={ellipsisCell}>{Invoice.InvoiceRepeat}</div></td>
                <td><div style={ellipsisCell}>{Invoice.InvoiceStatus}</div></td>
                <td className="text-center">
                    <button>
                        <MoreHoriz/>
                    </button>
                </td>
            </tr>
        </>
    );
};

export default InvoiceRow;