import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Item } from './models/model-item';
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

  //
  private tableRefreshSubject: Subject<void>;
  public tableRefreshTrigger: Observable<void>;

  HttpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {
    this.itemSubject = new Subject<Item>();
    this.itemForUpdate = this.itemSubject.asObservable();

    this.tableRefreshSubject = new Subject<void>();
    this.tableRefreshTrigger = this.tableRefreshSubject.asObservable();
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

  updateItem(item: Item): Observable<Item>{
    return this.http.put<Item>(`${this.itemApiUrl}/${item.id}`, item);
  }

  //Other Service functions
  setItemForUpdate(item: Item): void{
    this.itemSubject.next(item);
  }

  triggerTableRefresh(): void{
    this.tableRefreshSubject.next();
  }

}
