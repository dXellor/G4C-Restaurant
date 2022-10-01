import { Component, Input, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { PageChoice } from '../models/model-pagedItem';
import { CursorError } from '@angular/compiler/src/ml_parser/lexer';
import { Category } from '../models/model-category';

@Component({
  selector: 'app-table-header',
  templateUrl: './table-header.component.html',
  styleUrls: ['./table-header.component.css']
})
export class TableHeaderComponent implements OnInit {

  @Input() loggedIn: Boolean;
  public filterValue: string;
  public pageChoice = PageChoice;
  public totalPages: number;
  public currentPage: number;
  public categoryList: Category[];
  public filterCategory: string;

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

    this.restaurantService.getAllCategories().subscribe(res => {
      this.categoryList = res;
    });
  }

  nextPage(flag: PageChoice){
    this.restaurantService.getNewPage(flag);
    this.currentPage = this.restaurantService.getCurrentPageNumber();
    this.totalPages = this.restaurantService.getTotalPagesNumber();
  }

  filterItems(){
    this.restaurantService.setFilter(this.filterValue);
    this.restaurantService.triggerTableRefresh();
  }

  filterItemsByCategory(){
    this.restaurantService.setCategoryFilter(this.filterCategory);
    this.restaurantService.triggerTableRefresh();
  }
}
