import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  

  constructor(private ns:ProductService,private router:Router){}

  products:any;

  ngOnInit(){

    this.ns.getProducts().subscribe((res)=>{
      this.products =res;
    })


  }

  openDetails(pid:any){
    this.router.navigateByUrl("/user/details/"+pid);
  }


}
