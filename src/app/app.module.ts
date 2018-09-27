import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ApplyComponent } from './apply/apply.component';
import { Form2Component } from './form2/form2.component';
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import { Form1Component } from './form1/form1.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ApplyComponent,
    Form2Component,
    Form1Component
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    RouterModule.forRoot([
  {
    path: '',
    component: HomeComponent,
  }, 
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'apply',
    component: ApplyComponent,
  },
  {
    path: 'form',
    component: Form1Component,
  },{
    path: 'form2',
    component: Form2Component,
  }
 
]
    )
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
