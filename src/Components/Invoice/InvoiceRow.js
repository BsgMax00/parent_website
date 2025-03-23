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
                <td>{Invoice.Name}</td>
                <td>{Invoice.Price.toFixed(2)}</td>
                <td>{Invoice.Date}</td>
                <td>{Invoice.Status}</td>
                <td className="text-center">
                    <button>
                        <MoreHoriz></MoreHoriz>
                    </button>
                </td>
            </tr>
        </>
    );
};

export default InvoiceRow;