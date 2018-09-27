import { Component, OnInit } from '@angular/core';
import { CountryService } from '../home/country.service';
import { ICountry } from '../home/ICountry';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {
  countryName : ICountry[];
  constructor(private _conName : CountryService) { }

  ngOnInit() {
   this.countryName = this._conName.getData();
  }


  model: any = {};
 
  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
  }
}
