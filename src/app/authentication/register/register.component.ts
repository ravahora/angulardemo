import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  isEdit = false;
  users: any;
  tableName = "users";

  userObj = {
    id: '',
    firstname: "",
    lastname: "",
    email: "",
    password: ""
  }

  constructor(private crud: CrudService) { }

  ngOnInit(): void {
    this.getUsers()
  }

  editUser(user: any){
    this.userObj = user;
    this.isEdit = true;
    // this.crud.updateUser(user).subscribe(()=>{
    //   this.getUsers()
    //   console.log("user deleted")
    // })
  }

  delUser(user: any){
    this.crud.delete(this.tableName, user).subscribe(()=>{
      this.getUsers()
      console.log("user deleted")
    })
  }

  getUsers(){
    this.crud.getData(this.tableName).subscribe((response)=>{
      this.users = response
    })
  }

  submit(user: any){
    this.crud.save(this.tableName, user).subscribe(()=>{
      this.getUsers()
    })
  }

  saveUserInfo(){
    this.crud.update(this.tableName, this.userObj).subscribe(()=>{
      this.getUsers()
    })
    this.isEdit = !this.isEdit;
  }

}
