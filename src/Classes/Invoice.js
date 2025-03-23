class Invoice {
    constructor(Checked, Name, Price, Date, Status, Download){
        this.Checked = Checked;
        this.Name = Name;
        this.Price = Price.toFixed(2);
        this.Date = Date;
        this.Status = Status;
        this.Download = Download;
    };
};

export default Invoice;