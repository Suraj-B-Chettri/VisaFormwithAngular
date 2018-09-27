import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountryService } from '../home/country.service';
import {ICountry} from '../home/ICountry';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {

  constructor(private conCode : CountryService,private router : Router) { }
  model: any = {};
  countryCode : ICountry[];
  ngOnInit() {
    this.countryCode = this.conCode.getData();
  }
onSubmit(){
  //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
   this.router.navigate(['form2'])
}
}
