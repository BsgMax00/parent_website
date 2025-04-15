import { ChevronLeft, ChevronRight } from "@mui/icons-material";

const Pagination = ({ data, arrayIndex, setArrayIndex = () => {} }) => {
    const getMiddleTableIndex = () => {
        const indeces = []

        if (arrayIndex - 2 >= 0){
            indeces.push(arrayIndex - 2)
        }
        if (arrayIndex - 1 >= 0){
            indeces.push(arrayIndex - 1)
        }

        indeces.push(arrayIndex)

        if (arrayIndex + 1 <= data.length - 1){
            indeces.push(arrayIndex + 1)
        }
        if (arrayIndex + 2 <= data.length - 1){
            indeces.push(arrayIndex + 2)
        }

        return indeces;
    }

    const tableIndeces = getMiddleTableIndex();

    return (
        <>
            <div className="d-flex justify-content-center my-3">
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
                    {data.length >= arrayIndex + 5 && (
                        <button className="fw-bold px-3 py-2 btn btn-outline-secondary" style={{width:"54px", height:"54px"}}>...</button>
                    )}
                    {data.length >= arrayIndex + 4 && (
                        <button className="fw-bold px-3 py-2 btn btn-outline-secondary" style={{width:"54px", height:"54px"}} onClick={() => setArrayIndex(data.length - 1)}>{data.length}</button>
                    )}
                    {arrayIndex !== data.length - 1 && (
                        <button className="fw-bold px-3 py-2 btn btn-outline-secondary" style={{width:"54px", height:"54px"}} onClick={() => setArrayIndex(arrayIndex + 1)}><ChevronRight/></button>
                    )}
                </div>
            </div>
        </>
    );
};

export default Pagination;