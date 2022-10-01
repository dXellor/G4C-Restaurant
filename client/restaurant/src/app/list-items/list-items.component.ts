import { Component, Input, OnInit} from '@angular/core';
import { Item } from '../models/model-item';
import { RestaurantService } from '../restaurant.service';
import { getItemOption } from '../restaurant.service';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {

  public itemList: Item[];
  @Input() loggedIn: Boolean;

  constructor(private restaurantService: RestaurantService) {
    this.itemList = [];
  }

  ngOnInit(): void{    
    this.getItemTable();
    this.restaurantService.tableRefreshTrigger.subscribe(ret => {
      if(ret === ''){
        this.getItemTable();
      }else{
        this.getFilteredItemTable();
      }
      
    });
  }

  getItemTable(): void{
    this.restaurantService.getAllItems().subscribe(res => {
      this.restaurantService.setTotalPages(res.totalPages);
      this.restaurantService.triggerPageChanges();
      this.itemList = res.content;
    });
  }

  getFilteredItemTable(): void{
    this.restaurantService.filterItems().subscribe(res => {
      console.log(res);
      this.restaurantService.setTotalPages(res.totalPages);
      this.restaurantService.triggerPageChanges();
      this.itemList = res.content;
    });
  }

  deleteItem(id: Number | undefined): void{
    console.log(id);
    this.restaurantService.removeItem(id).subscribe(res => {
      console.log(res);
      this.getItemTable();
    });
  }

  sendItemToUpdateForm(item: Item): void{
    let newItem: Item = Object.assign({}, item);
    newItem.category = Object.assign({}, item.category);
    this.restaurantService.setItemForUpdate(newItem);
  }

}
