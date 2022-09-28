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

  constructor(private router: Router){
  }

  ngOnInit(): void {
    if(localStorage.getItem('loggedIn') !== null){
      this.isLoggedIn = true;
    }else{
      this.isLoggedIn = false;
    }
  }

  logoutUser(){
    localStorage.removeItem('loggedIn');
    window.location.reload();
  }

}
