import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { PageChoice } from '../models/model-pagedItem';
import { CursorError } from '@angular/compiler/src/ml_parser/lexer';

@Component({
  selector: 'app-table-header',
  templateUrl: './table-header.component.html',
  styleUrls: ['./table-header.component.css']
})
export class TableHeaderComponent implements OnInit {

  public filterValue: string;
  public pageChoice = PageChoice;
  public totalPages: number;
  public currentPage: number;

  constructor(private restaurantService: RestaurantService) {
    this.filterValue = '';
    this.currentPage = this.restaurantService.getCurrentPageNumber();
    this.totalPages = this.restaurantService.getTotalPagesNumber();
  }

  ngOnInit(): void {
    this.restaurantService.pageTrigger.subscribe(ret => {
      this.currentPage = ret[0];
      this.totalPages = ret[1];
      console.log(this.currentPage + " " + this.totalPages);
    });
  }

  nextPage(flag: PageChoice){
    this.restaurantService.getNewPage(flag);
    this.currentPage = this.restaurantService.getCurrentPageNumber();
    this.totalPages = this.restaurantService.getTotalPagesNumber();
  }

  filterItems(){
    this.restaurantService.setFilter(this.filterValue)
    this.restaurantService.triggerTableRefresh();
  }
}
