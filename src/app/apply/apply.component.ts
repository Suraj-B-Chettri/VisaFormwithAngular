import { Component, OnInit } from '@angular/core';
import { IData } from './IData';
import {VisaDataService} from './visa-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent implements OnInit {
  i : number = 0;
visaData : IData[] ;
  constructor(private _visaDataService : VisaDataService ) { }

  ngOnInit() : void {
    this.visaData = this._visaDataService.getData();
    }

    day14() {
      this.i = 0;
    }
    day30() {
      this.i = 1;
    }
    day30m() {
      this.i = 2;
    }
    day60() {
      this.i = 3;
    }
    day90() {
      this.i = 4;
    }
    day90m() {
      this.i = 5;
    }
    day90j() {
      this.i = 6;
    }
    
      
    navi= function() {
      this.router.navigate("['/form']");
};
}
