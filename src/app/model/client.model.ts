export class Client {
    clientName: string;
    postalZip: number;
    address: string;
    country: string;

    constructor(obj?:any) {
        this.clientName = obj && obj.clientName || "";
        this.postalZip = obj && obj.postalZip || 0;
        this.address = obj && obj.address || "";
        this.country = obj && obj.country || "";
    }
}