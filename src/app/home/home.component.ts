import { Component } from '@angular/core';
import { CountryService } from './country.service';
import { ICountry } from './ICountry';
import { Router } from '@angular/router';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

constructor(private _countryCode : CountryService,private router : Router) { }
countries : ICountry[];
cont1 : string;
cont2 : string;
model: any = {};

  ngOnInit() {
    this.countries = this._countryCode.getData();
  }
  onSubmit() {
     this.cont2 =this.model.contry2 ;
     this.cont1 = this.model.contry1;
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
    // console.log(this.model)
    console.log(this.cont1 + " " + this.cont2)
    this.router.navigate(['/apply']);
    
  }
 
}




















// import { Component } from '@angular/core';
// import { CountryService } from './country.service';
// import { ICountry } from './ICountry';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css']
// })
// export class HomeComponent {

// constructor(private _countryCode : CountryService,private router : Router) { }
// countries : ICountry[];
// cont1 : string;
// cont2 : string;
// model: any = {};

//   ngOnInit() {
//     this.countries = this._countryCode.getData();
//   }
//   onSubmit() {
//     this.cont2 =this.model.contry2;
//     this.cont1 = this.model.contry1;
//     // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
//     // console.log(this.model)
//     console.log(this.cont1 + " " + this.cont2)
//     this.router.navigate(['/apply']);
//   }
// }
