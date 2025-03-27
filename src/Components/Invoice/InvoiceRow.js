import { MoreHoriz } from "@mui/icons-material";

const InvoiceRow = ({ Invoice }) => {

    return (
        <>
            <tr>
                <td>
                  <div className="form-check d-flex justify-content-center">
                    <input className="form-check-input" type="checkbox" />
                  </div>
                </td>
                <td>{Invoice.InvoiceName}</td>
                <td>{Invoice.InvoicePrice.toFixed(2)}</td>
                <td>{Invoice.InvoiceDate}</td>
                <td>{Invoice.InvoiceStatus}</td>
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