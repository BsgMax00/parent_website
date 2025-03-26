class Invoice {
    constructor(InvoiceNr, Name, Price, Date, Repeat, Status, Download){
        this.InvoiceNr = InvoiceNr
        this.Name = Name;
        this.Price = Price;
        this.Date = Date;
        this.Repeat = Repeat
        this.Status = Status;
        this.Download = Download;
    };
};

export default Invoice;