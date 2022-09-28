import { Component, OnInit } from '@angular/core';
import { User } from '../models/model-user';
import { RestaurantService } from '../restaurant.service';
import { Route, Router } from '@angular/router';
import { Message } from '../models/model-message';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  public userBind: User;
  public message: Message;

  constructor(private restaurantService: RestaurantService, private router: Router) {
    this.userBind = {
      username: '',
      password: ''
    }
    this.message = new Message();
  }

  ngOnInit(): void {
  }

  userLogin(){
    this.restaurantService.loginUser(this.userBind).subscribe(res => {
      if(res){
        localStorage.setItem('loggedIn', this.userBind.username);
        this.restaurantService.triggerLoging(true);
        this.router.navigate(['main']);
      }else{
        this.message.body = "Invalid credentials";
        this.message.show = true;
        this.userBind.password = '';
      }
    });
  }

}
