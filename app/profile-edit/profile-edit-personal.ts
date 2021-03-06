/**
 * Created by Vlad on 9/5/2016.
 */
import {Component, OnInit} from "@angular/core";
import {VOUserExt, VOUser} from "../models/vos";
//import {JoinUsService} from "../join-us/login-service";
import {UserService} from "../myservices/user-service";
@Component({
selector:'join-us-personal'
  ,template:`
<div>
      <!--<h2>Profile Personal</h2>-->
      <forms-personal [person]="user"></forms-personal>
        <!--<a routerLink="../company" routerLinkActive="active">Company back</a>-->
        <!--<a routerLink="../assets" routerLinkActive="active">Assets</a>        -->
</div>

`
})
export class ProfileEditPersonal implements OnInit{
    // user:VOUser;

    private user:VOUserExt;

  constructor(private userService:UserService){  }

  ngOnInit():void{
    this.userService.user$.subscribe( user=>this.user = user);
  }

}
