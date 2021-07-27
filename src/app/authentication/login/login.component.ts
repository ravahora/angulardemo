import { CrudService } from 'src/app/services/crud.service';
import { Router, RouterModule, Routes } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(loginData: NgForm){

    const user = this.auth.authUser(loginData.value)
    if(user){
      localStorage.setItem("token", user.email)
      console.log("Login Successfull")
      // this.router.navigate(['/about'])
    } else {
      console.log("Login Failed")
    }


  }
}
