import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListItemsComponent } from './list-items/list-items.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { AddUpdateFormComponent } from './add-update-form/add-update-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ListItemsComponent,
    HomeViewComponent,
    AddUpdateFormComponent
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
