import { Component, OnInit } from '@angular/core';
import { User } from '../models/model-user';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  public userBind: User;

  constructor(private restaurantService: RestaurantService) {
    this.userBind = {
      username: '',
      password: ''
    }
  }

  ngOnInit(): void {
  }

  userLogin(){
    console.log("pozvan");
    this.restaurantService.loginUser(this.userBind).subscribe(res => {
      console.log(res);
    });
  }

}
