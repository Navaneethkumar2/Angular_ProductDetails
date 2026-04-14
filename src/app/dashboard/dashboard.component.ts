import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor(private nv:Router){}

  username:any;

  Logout(){
    localStorage.removeItem("userloggedin");
    this.nv.navigateByUrl("/");
  }

  ngOnInit(){
    if(localStorage.getItem("userloggedin")){
      this.username= localStorage.getItem("userloggedin");
    }else{
      this.nv.navigateByUrl("/");
    }
  }

}
