import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListItemsComponent } from './list-items/list-items.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { AddUpdateFormComponent } from './add-update-form/add-update-form.component';
import { TableHeaderComponent } from './table-header/table-header.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ListItemsComponent,
    HomeViewComponent,
    AddUpdateFormComponent,
    TableHeaderComponent,
    LoginFormComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
