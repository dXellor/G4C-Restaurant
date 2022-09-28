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

  constructor(private restaurantService: RestaurantService, private router: Router){
  }

  ngOnInit(): void {
    this.restaurantService.logingTriger.subscribe(loggedIn => {
      this.isLoggedIn = loggedIn;
    });
  }

  logoutUser(){
    this.restaurantService.triggerLoging(false);
    localStorage.removeItem('loggedIn');
    this.router.navigate(['main']);
  }

}
