import Invoice from "../Classes/Invoice";

import { TestData } from "../data/testData";

export const serviceGetInvoiceData = ( invoiceChunks ) => {
    const convertedInvoiceDataChunked = [];

    const convertedInvoiceData = TestData.map(data =>
        new Invoice(data.InvoiceNr, data.Name, data.Price, data.Date, data.Repeat, data.Status, data.Download)
    )

    for (let i = 0; i < convertedInvoiceData.length; i+= invoiceChunks) {
        convertedInvoiceDataChunked.push(convertedInvoiceData.slice(i, i + invoiceChunks))
    }

    return convertedInvoiceDataChunked;
}