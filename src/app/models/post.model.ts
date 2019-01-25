export class Post {
    public created: Date;
    public body: string;
    constructor(public title:string){
        this.created = new Date();
    }
}