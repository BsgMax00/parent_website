import { serviceFetch } from "./BaseService";
import { FormatDate } from "../helpers/DateHelpers";
import Invoice from "../Classes/Invoice";

const baseUrl = "http://localhost:5293/Invoice"

export const serviceGetInvoiceData = async ( userId ) => {
    const data = await serviceFetch("GET", `${baseUrl}/user/${userId}`);

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