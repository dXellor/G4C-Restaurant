import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public isLoggedIn: Boolean;

  constructor(private restaurantService: RestaurantService){
  }

  ngOnInit(): void {
    this.restaurantService.logingTriger.subscribe(flag => {
      this.isLoggedIn = flag;
    });

    if(localStorage.getItem('loggedIn') !== null){
      this.isLoggedIn = true;
    }
  }

  logoutUser(){
    localStorage.removeItem('loggedIn');
    this.isLoggedIn = false;
    this.restaurantService.setFilter('');
    this.restaurantService.setCategoryFilter('');
    window.location.reload();
  }

}
