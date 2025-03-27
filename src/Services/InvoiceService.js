import { serviceFetch } from "./BaseService";

import Invoice from "../Classes/Invoice";

export const serviceGetInvoiceData = async ( invoiceChunks ) => {
    const convertedInvoiceDataChunked = [];
    const data = await serviceFetch("GET", "http://localhost:5293/Invoice");

    console.log(data)

    const convertedInvoiceData = data.map(data =>
        new Invoice(data.invoiceId, data.invoiceName, data.invoiceDescription, data.invoicePrice, data.invoiceDate, data.invoiceNextDate, data.invoiceRepeat, data.invoiceStatus, data.nextInvoice)
    )

    for (let i = 0; i < convertedInvoiceData.length; i += invoiceChunks) {
        convertedInvoiceDataChunked.push(convertedInvoiceData.slice(i, i + invoiceChunks))
    }

    return convertedInvoiceDataChunked;
}