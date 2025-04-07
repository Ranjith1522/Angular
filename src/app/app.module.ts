import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CentralComponent } from './central/central.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'


const routes : Routes = [
  {path:'', redirectTo:'dashboard',pathMatch : 'full'},
  {path:'Home',component : HomeComponent},
  {path:'Central', component : CentralComponent},
  {path:'Services',component : ServicesComponent},
  {path:'About',component : AboutComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    CentralComponent,
    ServicesComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
