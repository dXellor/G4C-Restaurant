export interface CategoryInterface{
    id?: Number;
    cname: String;
}

export class Category implements CategoryInterface{
    id?: Number;
    cname: String;

    constructor(categoryCfg: CategoryInterface){
        this.id = categoryCfg.id;
        this.cname = categoryCfg.cname;
    }
} 