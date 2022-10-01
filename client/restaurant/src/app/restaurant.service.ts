import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Item } from './models/model-item';
import { Category } from './models/model-category';
import { PageChoice, pagedItemInterface } from './models/model-pagedItem';
import { User } from './models/model-user';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  //API urls
  private itemApiUrl = "http://localhost:8080/api/restaurant/items";
  private categoryApiUrl = "http://localhost:8080/api/restaurant/categories";
  private loginApiUrl = "http://localhost:8080/api/restaurant/login";

  //Page related variables
  private page: number;
  private size: number;
  private totalPages: number;

  private pageSubject: Subject<number[]>;
  public pageTrigger: Observable<number[]>;

  //Shared item for transfering data between nodes on the same level
  public itemForUpdate: Observable<Item>;
  private itemSubject: Subject<Item>;

  //Filter
  private tableRefreshSubject: Subject<string[]>;
  public tableRefreshTrigger: Observable<string[]>;
  private filter: string;
  private cfilter: string;

  //User Login/Logout trigger
  private logingSubject: Subject<Boolean>;
  public logingTriger: Observable<Boolean>;

  HttpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {
    this.itemSubject = new Subject<Item>();
    this.itemForUpdate = this.itemSubject.asObservable();

    this.tableRefreshSubject = new Subject<string[]>();
    this.tableRefreshTrigger = this.tableRefreshSubject.asObservable();
    this.filter = '';

    this.page = 0;
    this.totalPages = 0;
    this.size = 5;
    this.pageSubject = new Subject<number[]>();
    this.pageTrigger = this.pageSubject.asObservable();

    this.logingSubject = new Subject<Boolean>();
    this.logingTriger = this.logingSubject.asObservable();
  }

  //API communication functions
  getAllCategories() : Observable<Category[]>{
    return this.http.get<Category[]>(this.categoryApiUrl);
  }

  getAllItems() : Observable<pagedItemInterface>{
    let pageParams = new HttpParams();
    pageParams = pageParams.append('page', this.page);
    pageParams = pageParams.append('size', this.size);

    return this.http.get<pagedItemInterface>(this.itemApiUrl, {params: pageParams});
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

  filterItems(): Observable<pagedItemInterface>{
    let pageParams = new HttpParams();
    pageParams = pageParams.append('page', this.page);
    pageParams = pageParams.append('size', this.size);
    if(this.filter === ''){
      pageParams = pageParams.append('cname', this.cfilter);
    }else{
      pageParams = pageParams.append('fname', this.filter);
    }

    return this.http.get<pagedItemInterface>(`${this.itemApiUrl}/filter`, {params: pageParams});
  }

  //Login
  loginUser(user: User): Observable<Boolean>{
    return this.http.post<Boolean>(this.loginApiUrl, user);
  }

  //Other Service functions
  setItemForUpdate(item: Item): void{
    this.itemSubject.next(item);
  }

  triggerTableRefresh(): void{
    this.tableRefreshSubject.next([this.filter, this.cfilter]);
  }
  
  triggerLoging(flag: Boolean): void{
    this.logingSubject.next(flag);
  }

  triggerPageChanges(): void{
    this.pageSubject.next([this.page, this.totalPages]);
  }

  getNewPage(flag: PageChoice){
    if(flag === PageChoice.PREVIOUS && this.page > 0){
      this.page--;
    }else if(flag === PageChoice.NEXT && this.page < this.totalPages - 1){
      // console.log("Total: " + this.totalPages + " Current: " +  this.page);
      this.page++;
    }

    this.triggerTableRefresh();
  }

  setTotalPages(numberOfPages: number){
    this.totalPages = numberOfPages;
  }

  setFilter(f: string): void{
    this.filter = f;
  }

  setCategoryFilter(f: string): void{
    this.cfilter = f;
  }

  //Getters for page variables
  getCurrentPageNumber(): number{
    return this.page;
  }

  getTotalPagesNumber(): number{
    return this.totalPages;
  }

}

export enum getItemOption {
  ALL,
  FILTER
}