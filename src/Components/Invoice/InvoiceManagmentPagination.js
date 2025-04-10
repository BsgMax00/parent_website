import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { useContext } from "react";
import { InvoiceContext } from "../../Contexts/InvoiceContext";

const InvoiceManagmentPagination = ({ chunkedInvoiceData }) => {
    const { arrayIndex, setArrayIndex } = useContext(InvoiceContext);

    const getMiddleTableIndex = () => {
        const indeces = []

        if (arrayIndex - 2 >= 0){
            indeces.push(arrayIndex - 2)
        }
        if (arrayIndex - 1 >= 0){
            indeces.push(arrayIndex - 1)
        }

        indeces.push(arrayIndex)

        if (arrayIndex + 1 <= chunkedInvoiceData.length - 1){
            indeces.push(arrayIndex + 1)
        }
        if (arrayIndex + 2 <= chunkedInvoiceData.length - 1){
            indeces.push(arrayIndex + 2)
        }

        return indeces;
    }

    const tableIndeces = getMiddleTableIndex();

    return (
        <>
            <div className="d-flex justify-content-center mt-2">
                <div className="btn-group">
                    {arrayIndex !== 0 && (
                        <button className="fw-bold px-3 py-2 btn btn-outline-secondary" style={{width:"54px", height:"54px"}} onClick={() => setArrayIndex(arrayIndex - 1)}><ChevronLeft/></button>
                    )}
                    {arrayIndex - 3 >= 0 && (
                        <button className="fw-bold px-3 py-2 btn btn-outline-secondary" style={{width:"54px", height:"54px"}} onClick={() => setArrayIndex(0)}>1</button>
                    )}
                    {arrayIndex - 4 >= 0 && (
                        <button className="fw-bold px-3 py-2 btn btn-outline-secondary" style={{width:"54px", height:"54px"}}>...</button>
                    )}
                    {tableIndeces.map((indece, index) => (
                        <button key={index} className={`fw-bold px-3 py-2 btn ${arrayIndex === indece ? "btn-primary" : "btn-outline-secondary"}`} style={{width:"54px", height:"54px"}} onClick={() => setArrayIndex(indece)}>{indece + 1}</button>
                    ))}
                    {chunkedInvoiceData.length >= arrayIndex + 5 && (
                        <button className="fw-bold px-3 py-2 btn btn-outline-secondary" style={{width:"54px", height:"54px"}}>...</button>
                    )}
                    {chunkedInvoiceData.length >= arrayIndex + 4 && (
                        <button className="fw-bold px-3 py-2 btn btn-outline-secondary" style={{width:"54px", height:"54px"}} onClick={() => setArrayIndex(chunkedInvoiceData.length - 1)}>{chunkedInvoiceData.length}</button>
                    )}
                    {arrayIndex !== chunkedInvoiceData.length - 1 && (
                        <button className="fw-bold px-3 py-2 btn btn-outline-secondary" style={{width:"54px", height:"54px"}} onClick={() => setArrayIndex(arrayIndex + 1)}><ChevronRight/></button>
                    )}
                </div>
            </div>
        </>
    );
};

export default InvoiceManagmentPagination;