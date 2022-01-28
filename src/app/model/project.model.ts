export class Project {
    _id: number;
    projectName: string;
    description: string;
    customer: string;
    leadName: string;

    constructor(obj?:any) {
        this._id = obj && obj._id || 0;
        this.projectName = obj && obj.projectName || "";
        this.description = obj && obj.description || "";
        this.customer = obj && obj.customer || "";
        this.leadName = obj && obj.leadName || "";
    }
}