import { MoreHoriz } from "@mui/icons-material";

const InvoiceRow = ({ Invoice }) => {
    return (
        <>
            <tr style={{ height: "60px" }}>
                <td>
                  <div className="form-check d-flex justify-content-center">
                    <input className="form-check-input" type="checkbox" />
                  </div>
                </td>
                <td>{Invoice.InvoiceNr}</td>
                <td>{Invoice.Name}</td>
                <td>{Invoice.Price.toFixed(2)}</td>
                <td>{Invoice.Date}</td>
                <td>{Invoice.Repeat}</td>
                <td>{Invoice.Status}</td>
                <td>
                    <center>
                        <button>
                            <MoreHoriz></MoreHoriz>
                        </button>
                    </center>
                </td>
            </tr>
        </>
    );
};

export default InvoiceRow;