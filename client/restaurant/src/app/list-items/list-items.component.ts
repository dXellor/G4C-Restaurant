import { Component, OnInit } from '@angular/core';
import { Item } from '../models/model-item';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {

  public itemList: Item[];

  constructor(private restaurantService: RestaurantService) {
    this.itemList = [];
  }

  ngOnInit(): void {
    this.restaurantService.getAllItems().subscribe(res => {
      this.itemList = res;
    });
  }

}
