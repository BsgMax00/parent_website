import { serviceFetch } from "./BaseService";

import Invoice from "../Classes/Invoice";

const baseUrl = "http://localhost:5293/Invoice"

export const serviceGetInvoiceData = async () => {
    const data = await serviceFetch("GET", `${baseUrl}`);

    const convertedInvoiceData = data.map(data =>
        new Invoice(data.invoiceId, data.invoiceName, data.invoiceDescription, data.invoicePrice, FormatDate(data.invoiceDate), data.invoiceRepeat, data.invoiceStatus, data.groupId)
    )

    return convertedInvoiceData;
}

export const serviceDeleteInvoiceData = async ( invoiceID ) => {
    await serviceFetch("DELETE", `${baseUrl}/${invoiceID}`);
}

export const servicePostInvoiceData = async ( invoice ) => {
    const body = JSON.stringify(invoice);
    await serviceFetch("POST", `${baseUrl}`, body);
}

export const servicePutInvoiceData = async (invoice) => {
    const body = JSON.stringify(invoice);
    await serviceFetch("PUT", `${baseUrl}/${invoice.invoiceId}`, body)
}

const FormatDate = ( invoiceDate ) => {
    const date = new Date(invoiceDate);

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return `${year}-${month}-${day}`;
}