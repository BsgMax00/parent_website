import { MoreHoriz } from "@mui/icons-material";

const InvoiceRow = ({ Invoice }) => {
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
                <td><div style={ellipsisCell}>€ {Invoice.InvoicePrice.toFixed(2)}</div></td>
                <td><div style={ellipsisCell}>{Invoice.InvoiceRepeat}</div></td>
                <td><div style={ellipsisCell}>{Invoice.InvoiceStatus}</div></td>
                <td className="text-center">
                    <button className="btn-group">
                        <MoreHoriz/>
                    </button>
                </td>
            </tr>
        </>
    );
};

export default InvoiceRow;