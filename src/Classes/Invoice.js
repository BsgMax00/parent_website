class Invoice {
    constructor(invoiceId, invoiceName, invoiceDescription, invoicePrice, invoiceDate, invoiceRepeat, invoiceStatus, groupId){
        this.invoiceId = invoiceId;
        this.invoiceName = invoiceName;
        this.invoiceDescription = invoiceDescription;
        this.invoicePrice = invoicePrice;
        this.invoiceDate = invoiceDate;
        this.invoiceRepeat = invoiceRepeat;
        this.invoiceStatus = invoiceStatus;
        this.groupId = groupId;
    };
};

export default Invoice;