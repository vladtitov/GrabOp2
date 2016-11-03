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
 <!--Card Yours-->
<div class="row">
    <div class="col-sm-5">
        <div [my-md-image]="myImage" [size]="'130x130'"></div>
    </div>
    <div class="col-sm-7">
        <div><h5>{{user.displayName}}</h5></div>
        <div><span>{{user.city}}</span>, <span>{{user.province}}</span></div>
         <br>
        <div>
          <div><strong>Offerings: <span class="text-warning">{{user.offers}}</span></strong></div>
          <div><strong>Needs: <span class="text-warning">{{user.needs}}</span></strong></div>        
        </div>        
    </div>
</div>

</div>
`
})
export class CardYours implements OnInit{
    user:VOUserExt  = new VOUserExt({});
    myImage:string = '';

    constructor(private userService:UserService){

    }

    ngOnInit():void {

      // this.loginService.myAccount$.subscribe(
      this.userService.user$.subscribe(
        user =>{
          console.log(user);
          this.user = user;
          this.user.displayName = user.firstName + ' ' + user.lastName;
          this.myImage = 'url('+this.user.profile_pic+')';
        }
      )
    }

}
