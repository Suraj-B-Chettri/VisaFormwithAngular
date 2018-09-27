import { Injectable } from '@angular/core';
import {IData} from './IData'

@Injectable({
  providedIn: 'root'
})
export class VisaDataService {

  constructor() { }
  getData(): IData[]   {
    return [ { 
     type: "14 Days Visa Single Entry",
     validity: "60 days from the date of issue",
     stayValidity: "14 days from the date of entry",
     processing: "24 - 72 Working Hours",
     govFee:  72,
     serviceFee: 107,
     totalCost: 179
   },{ 
    type: "30 Days Visa Single Entry",
    validity: "60 days from the date of issue",
    stayValidity: "30 days from the date of entry",
    processing: "24 - 72 Working Hours",
    govFee:  72,
    serviceFee: 127,
    totalCost: 199
  },{ 
    type: "30 Days Visa Single Entry",
    validity: "60 days from the date of issue",
    stayValidity: "30 days from the date of entry",
    processing: "24 - 72 Working Hours",
    govFee:  260,
    serviceFee: 185,
    totalCost: 445
  },{ 
    type: "60 Days Visa Single Entry",
    validity: "60 days from the date of issue",
    stayValidity: "60 days from the date of entry",
    processing: "24 - 72 Working Hours",
    govFee:  180,
    serviceFee: 285,
    totalCost: 465
  },{ 
    type: "90 Days Visa Single Entry",
    validity: "60 days from the date of issue",
    stayValidity: "90 days from the date of entry",
    processing: "24 - 72 Working Hours",
    govFee:  200,
    serviceFee: 340,
    totalCost: 540
  },{ 
    type: "90 Days Visa Single Entry",
    validity: "60 days from the date of issue",
    stayValidity: "90 days from the date of entry",
    processing: "24 - 72 Working Hours",
    govFee:  499,
    serviceFee: 441,
    totalCost: 940
  },{ 
    type: "90 Days Visa Single Entry",
    validity: "60 days from the date of issue",
    stayValidity: "90 days from the date of entry",
    processing: "24 - 72 Working Hours",
    govFee:  200,
    serviceFee: 390,
    totalCost: 590
  },
  ]
}
}
