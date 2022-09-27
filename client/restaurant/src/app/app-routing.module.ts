import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { LoginFormComponent } from './login-form/login-form.component';

const routes: Routes = [
  { path : '', component: HomeViewComponent },
  { path : 'login', component: LoginFormComponent },
  { path : 'about', component: AboutComponent },
  { path : 'contact', component: ContactComponent },
  { path : '**', redirectTo: '', pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
