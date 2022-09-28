import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css']
})
export class HomeViewComponent implements OnInit {

  public isLoggedIn: Boolean; 

  constructor(private restaurantService: RestaurantService) { 
    this.isLoggedIn = false;
  }

  ngOnInit(): void {
    this.restaurantService.logingTriger.subscribe(flag => {
      this.isLoggedIn = flag;
      console.log(this.isLoggedIn);
    });
  }

}
