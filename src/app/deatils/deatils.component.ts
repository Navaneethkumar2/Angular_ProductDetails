import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-deatils',
  templateUrl: './deatils.component.html',
  styleUrl: './deatils.component.css'
})
export class DeatilsComponent {

  reqPid:any;
  constructor(private rw:ActivatedRoute, private ns:ProductService){}


  product:any;

  ngOnInit(){
    this.reqPid= this.rw.snapshot.paramMap.get('pid');
    this.product= this.ns.getProductById(this.reqPid);
  }

}
