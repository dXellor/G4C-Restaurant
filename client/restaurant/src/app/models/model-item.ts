import { CategoryInterface } from "./model-category";

export interface ItemInterface {
    id?: Number;
    name: String;
    category: CategoryInterface;
    price: Number;
}

export class Item implements ItemInterface{
    id?: Number;
    name: String;
    category: CategoryInterface;
    price: Number;

    constructor(itemCfg: ItemInterface){
        this.id = itemCfg.id;
        this.name = itemCfg.name;
        this.category = itemCfg.category;
        this.price = itemCfg.price;
    }
}