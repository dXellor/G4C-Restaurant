import { Component, OnInit } from '@angular/core';
import { Category } from '../models/model-category';
import { Item } from '../models/model-item';
import { RestaurantService } from '../restaurant.service';
import { Message } from '../models/model-message';

@Component({
  selector: 'app-add-update-form',
  templateUrl: './add-update-form.component.html',
  styleUrls: ['./add-update-form.component.css']
})
export class AddUpdateFormComponent implements OnInit {

  public itemBind: Item;
  public categoryList: Category[];
  public message: Message;

  constructor(private restaurantService: RestaurantService) {
    this.itemBind = {
      name: "",
      category: {
        cname: ""
      },
      price: 0
    }
    this.categoryList = [];
    this.message = new Message();
  }

  ngOnInit(): void {
    this.restaurantService.getAllCategories().subscribe(res => {
      this.categoryList = res;
    });
    
    this.restaurantService.getItemForUpdate().subscribe(item => {
      this.itemBind = item;
    });
  }

  saveItem(): void{

    console.log(this.itemBind.id);
    return;

    if(this.itemBind.name === '' || this.itemBind.category === undefined || typeof(this.itemBind.price) !== "number"){
      this.message.body = "Warning, submit unvalid data again, and you will be purged from existence";
      this.message.show = true;
      return;
    }

    this.restaurantService.addItem(this.itemBind).subscribe(res => {
      this.restaurantService.getAllItems();
    });

    this.itemBind = {
      name: "",
      category: {
        cname: ""
      },
      price: 0
    }
  }
}
