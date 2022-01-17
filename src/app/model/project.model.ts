export class Project {
    projectName: string;
    description: string;
    customer: string;
    leadName: string;

    constructor(obj?:any) {
        this.projectName = obj && obj.projectName || "";
        this.description = obj && obj.description || "";
        this.customer = obj && obj.customer || "";
        this.leadName = obj && obj.leadName || "";
    }
}