class Invoice {
    constructor(id, InvoiceId, InvoiceName, InvoiceDescription = null, InvoicePrice, InvoiceDate, InvoiceNextDate = null, InvoiceRepeat, InvoiceStatus, NextInvoice = null){
        this.id = id;
        this.InvoiceId = InvoiceId;
        this.InvoiceName = InvoiceName;
        this.InvoiceDescription = InvoiceDescription;
        this.InvoicePrice = InvoicePrice;
        this.InvoiceDate = InvoiceDate;
        this.InvoiceNextDate = InvoiceNextDate;
        this.InvoiceRepeat = InvoiceRepeat;
        this.InvoiceStatus = InvoiceStatus;
        this.NextInvoice = NextInvoice;
    };
};

export default Invoice;