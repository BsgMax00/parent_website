import { serviceFetch } from "./BaseService";

import Invoice from "../Classes/Invoice";

const baseUrl = "http://localhost:4000"

export const serviceGetInvoiceData = async () => {
    const data = await serviceFetch("GET", `${baseUrl}/Invoice`);

    const convertedInvoiceData = data.map(data =>
        new Invoice(data.id, data.InvoiceId, data.InvoiceName, data.InvoiceDescription, data.InvoicePrice, FormatDate(data.InvoiceDate), data.InvoiceRepeat, data.InvoiceStatus, data.GroupId)
    )

    return convertedInvoiceData;
}

export const serviceDeleteInvoiceData = async ( invoiceID ) => {
    await serviceFetch("DELETE", `${baseUrl}/Invoice/${invoiceID}`);
}

export const servicePostInvoiceData = async ( invoice ) => {
    const body = JSON.stringify(invoice);
    await serviceFetch("POST", `${baseUrl}/Invoice`, body);
}

export const servicePutInvoiceData = async (invoice) => {
    const body = JSON.stringify(invoice);
    await serviceFetch("PUT", `${baseUrl}/Invoice/${invoice.id}`, body)
}

const FormatDate = ( invoiceDate ) => {
    const date = new Date(invoiceDate);

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return `${year}-${month}-${day}`;
}