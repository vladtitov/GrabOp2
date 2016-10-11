/**
 * Created by Vlad on 9/5/2016.
 */
import {Component, OnInit} from "@angular/core";
//import {JoinUsService} from "./login-service";
import {VOUser} from "../models/vos";
import {UserService} from "../myservices/user-service";
@Component({
template:`
<div> 
      <forms-company [person]="user"></forms-company>
        <a routerLink="../username" routerLinkActive="active">Username</a>
        <a routerLink="../personal" routerLinkActive="active">Personal</a>
      </div>
`
})
export class JoinUsCompany implements OnInit{
  user:VOUser = new VOUser({});

  constructor(private userService:UserService){


  }
  ngOnInit(){
    this.userService.user$.subscribe(
      user=>this.user = user
    )
  }

}
