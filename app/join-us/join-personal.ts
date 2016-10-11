/**
 * Created by Vlad on 9/5/2016.
 */
import {Component, OnInit} from "@angular/core";
import {VOUserExt} from "../models/vos";
import {JoinUsService} from "./login-service";
import {UserService} from "../myservices/user-service";
@Component({
selector:'join-us-personal'
  ,template:`  
      <forms-personal [person]="user"></forms-personal>      
        <a routerLink="../company" routerLinkActive="active">Company back</a>
        <a routerLink="../assets" routerLinkActive="active">Assets</a>       

`
})
export class JoinUsPersonal implements OnInit{
  user:VOUserExt;

  constructor(private userService:UserService){

  }

  ngOnInit():void{
    this.userService.user$.subscribe( user=>this.user = user);
  }

}
