import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Item, ItemInterface } from './models/model-item';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private itemApiUrl = "http://localhost:8080/api/restaurant/items";
  HttpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  ngOnInit(){
    this.getAllItems().subscribe(res => {
      console.log(res);
    });
  }

  getAllItems() : Observable<Item[]>{
    return this.http.get<Item[]>(this.itemApiUrl);
  }

}
