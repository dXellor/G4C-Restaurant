import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { PageChoice } from '../models/model-pagedItem';

@Component({
  selector: 'app-table-header',
  templateUrl: './table-header.component.html',
  styleUrls: ['./table-header.component.css']
})
export class TableHeaderComponent implements OnInit {

  public filterValue: string;
  public pageChoice = PageChoice;

  constructor(private restaurantService: RestaurantService) {
    this.filterValue = '';
  }

  ngOnInit(): void {
  }

  nextPage(flag: PageChoice){
    this.restaurantService.getNewPage(flag);
  }

  filterItems(){
    this.restaurantService.setFilter(this.filterValue)
    this.restaurantService.triggerTableRefresh();
  }
}
