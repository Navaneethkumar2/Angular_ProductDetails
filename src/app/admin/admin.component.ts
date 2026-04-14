import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {


  constructor(private nad:Router){}

  username:any;

  Logout(){
    
    localStorage.removeItem("adminloggedin");
    this.nad.navigateByUrl('/');


  }

  ngOnInit(){
        
     if(localStorage.getItem("adminloggedin")){
      this.username= localStorage.getItem("adminloggedin");
    }else{
      this.nad.navigateByUrl("/");
    }

  }



}
