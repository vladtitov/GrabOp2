/**
 * Created by Vlad on 9/6/2016.
 */

import {Component, OnInit} from "@angular/core";
import {VOAccount, VOUserExt} from "../models/vos";
import {UserService} from "../myservices/user-service";
@Component({
  selector:'card-yours'
  ,template:`
<div>
 Card Yours
<div my-md-image="user.profile_pic"></div>
 <div>{{user.displayName}}</div>
        <div><span>{{user.city}}</span>, <span>{{user.province}}</span></div> 
        <div>
          <div>Offerings: <span>{{user.offers}}</span></div>
          <div>Needs: <span>{{user.needs}}</span></div>        
        </div>        
</div>
`
})
export class CardYours implements OnInit{
    user:VOUserExt  = new VOUserExt({});
    myImage = this.user.profile_pic;

    constructor(private userService:UserService){

    }

    ngOnInit():void {

      // this.loginService.myAccount$.subscribe(
      this.userService.user$.subscribe(
        user =>{
          console.log(user);
          this.user = user;
        }
      )
    }

}
