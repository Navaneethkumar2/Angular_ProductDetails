import { Injectable } from '@angular/core';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
   

  products:any=[
    {
    districtId:1,
    districtName:'Krishna',
    districtPopulation:'500000',
    districtCrop:'Mangoes',
    districtImage:'https://cdn.s3waas.gov.in/s3c399862d3b9d6b76c8436e924a68c45b/uploads/2018/02/2019061772-1.jpg',
    },
     {
    districtId:2,
    districtName:'NTR',
    districtPopulation:'700000',
    districtCrop:'Vegetables',
    districtImage:'https://cdn.s3waas.gov.in/s39461cce28ebe3e76fb4b931c35a169b0/uploads/2022/03/2022033124.jpg',
    },
     {
    districtId:3,
    districtName:'Guntur',
    districtPopulation:'1000000',
    districtCrop:'Chilli',
    districtImage:'https://amaravativentures.com/wp-content/uploads/2024/08/Amaravati-1024x683.png',
    },
    
    
  ]


  getProducts(){
    return of(this.products);
  }


  getProductById(pid:any){
    var reqProduct = this.products.find((p: { districtId: any; }) => p.districtId==pid);
    return reqProduct;
  }








    


}
