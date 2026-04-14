import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private nv: Router) { }

  username: any;
  password: any;
  reqpwd: any;
  requser: any;

  checkLogin() {

    this.reqpwd = this.username.slice(0, 3) + "123";
    this.requser = "admin123";

    if (this.requser == this.username && this.reqpwd == this.password) {

      this.nv.navigateByUrl('/admin');
      localStorage.setItem("adminloggedin", this.username);


      alert("Admin Successfully");


    } else if (this.reqpwd == this.password) {

      alert("Login Success");
      console.log(this.username);
      console.log(this.password);
      this.nv.navigateByUrl('/user');
      localStorage.setItem("userloggedin", this.username);

    } else {
      alert("Login Failed");
    }


  }


}
