/**
 * Created by Vlad on 9/5/2016.
 */
import {Component, OnInit} from "@angular/core";
//import {JoinUsService} from "../join-us/login-service";
import {VOUserExt} from "../models/vos";
import {UserService} from "../myservices/user-service";
@Component({
template:`
<div>
      <h2>Profile</h2>
      <forms-company [person]="user"></forms-company>        
        <a routerLink="../personal" routerLinkActive="active">Personal</a>
        
</div>
`
})
export class ProfileEditCompany implements OnInit{
  user:VOUserExt
  constructor(private userService:UserService){
    //this.person = joinusService.person;
  }
  ngOnInit():void{
    this.userService.user$.subscribe(
      user=>this.user = user
    )
  }

}
