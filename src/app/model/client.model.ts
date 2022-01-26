export class Client {
    _id: number;
    clientName: string;
    address: string;
    city: string;
    postalZip: number;
    country: string;

    constructor(obj?:any) {
        this._id = obj && obj._id || 0;
        this.clientName = obj && obj.clientName || "";
        this.address = obj && obj.address || "";
        this.city = obj && obj.city || "";
        this.postalZip = obj && obj.postalZip || 0;
        this.country = obj && obj.country || "";
    }
}