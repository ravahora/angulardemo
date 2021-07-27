import { CrudService } from './crud.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userArray: any;
  constructor(private crud: CrudService) { }

  authUser(user: any){
    this.crud.getData("users").subscribe((response)=>{
      this.userArray = response;
    })
    return this.userArray.find((p: any) => p.email === user.email && p.password === user.password)
  }
}
