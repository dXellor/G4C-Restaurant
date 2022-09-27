import { Item } from "./model-item";

export interface pagedItemInterface{
    content : Item[];
    totalPages: number;
}

export enum PageChoice{
    NEXT,
    PREVIOUS
}