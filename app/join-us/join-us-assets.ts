/**
 * Created by Vlad on 9/17/2016.
 */
import {Component, OnInit} from "@angular/core";
import {VOUserExt} from "../models/vos";
//import {JoinUsService} from "./login-service";
import {UserService} from "../myservices/user-service";
@Component({
  template:`
<div>

<div *ngIf="myMsg">{{myMsg}}</div>
<edit-assets [model]="user" ></edit-assets>
  <a routerLink="../personal" routerLinkActive="active">Personal</a>
  <button class="btn btn-primary"   (click)="onSubmitClick()">Submit</button>
</div>
`

})
export  class JoinUsAssets implements OnInit{
  user:VOUserExt;
  myMsg:string;
  constructor(private userService:UserService){

  }

  onSubmitClick():void{
    this.userService.saveUser().then(
      res=>{
        if(res.success){
          this.myMsg='data Saved'
        }else {
          this.myMsg = res.message;
        }
        setTimeout(()=>{this.myMsg=''},10000);
        this.userService.getUser();
      }
    )

  }
  ngOnInit():void{
    this.userService.user$.subscribe( user=>this.user = user);
  }

}
