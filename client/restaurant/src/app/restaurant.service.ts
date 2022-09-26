import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Item, ItemInterface } from './models/model-item';
import { Category } from './models/model-category';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  //API urls
  private itemApiUrl = "http://localhost:8080/api/restaurant/items";
  private categoryApiUrl = "http://localhost:8080/api/restaurant/categories";

  //Shared item for transfering data between nodes on the same level
  public itemForUpdate: Observable<Item>;
  private itemSubject: Subject<Item>;

  HttpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {
    this.itemSubject = new Subject<Item>();
    this.itemForUpdate = this.itemSubject.asObservable();
  }

  //API communication functions
  getAllCategories() : Observable<Category[]>{
    return this.http.get<Category[]>(this.categoryApiUrl);
  }

  getAllItems() : Observable<Item[]>{
    return this.http.get<Item[]>(this.itemApiUrl);
  }

  removeItem(id: Number | undefined): Observable<Object>{
    return this.http.delete(`${this.itemApiUrl}/${id}`);
  }

  addItem(item: Item): Observable<Item>{
    return this.http.post<Item>(this.itemApiUrl, item);
  }

  //Other Service functions
  setItemForUpdate(item: Item): void{
    console.log("Service station: " + item);
    this.itemSubject.next(item);
  }

  getItemForUpdate(): Observable<Item>{
    return this.itemForUpdate;
  }
  

}
