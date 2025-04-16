class Invoice {
    constructor(id, InvoiceId, InvoiceName, InvoiceDescription, InvoicePrice, InvoiceDate, InvoiceRepeat, InvoiceStatus, GroupId){
        this.id = id;
        this.InvoiceId = InvoiceId;
        this.InvoiceName = InvoiceName;
        this.InvoiceDescription = InvoiceDescription;
        this.InvoicePrice = InvoicePrice;
        this.InvoiceDate = InvoiceDate;
        this.InvoiceRepeat = InvoiceRepeat;
        this.InvoiceStatus = InvoiceStatus;
        this.GroupId = GroupId;
    };
};

export default Invoice;