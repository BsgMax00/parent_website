import { TestData } from "../data/testData";

const InvoicePage = () => {
    return (
        <>
            {TestData.map((data) => {
                return (
                    <div className="card">
                        <div className="card-body">
                            <div>{data.name}</div>
                            <div>{data.price}</div>
                            <div>{data.date}</div>
                        </div>
                    </div>
                )
            })}
        </>
    );
};

export default InvoicePage;