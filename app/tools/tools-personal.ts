/**
 * Created by Vlad on 9/6/2016.
 */
import {Component, OnInit} from "@angular/core";

import {VOAccount, VOUserExt} from "../models/vos";
import {UserService} from "../myservices/user-service";


@Component({
  selector:'tools-personal'
  ,template:`
<div>
    <!--<div class="s40x40 round" [style.background-image] ="myImage"> </div>   -->
      <div [my-md-image]="myImage"> </div>
</div>
`
})
export class ToolsPersonal implements OnInit{
// myImage:string = 'url(img/img-girl.jpg)';
myImage:string = '';
  private myStyle:any;

    private user:VOUserExt;

    constructor(private userService:UserService){

    }

    ngOnInit():void{
        //  this.profileService.myAccount$.subscribe(profile=>this.myImage = profile.profile_pic);
        this.userService.user$.subscribe(
            user=> {
                this.user = user;
                this.myImage = 'url('+this.user.profile_pic+')';
            }
        );
    }

}
