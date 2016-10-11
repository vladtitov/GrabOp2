/**
 * Created by Vlad on 9/6/2016.
 */
import {Component, OnInit} from "@angular/core";

import {VOAccount} from "../models/vos";
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
myImage:string = 'url(img/img-girl.jpg)';
  private myStyle:any;

  constructor(private loginService:UserService){

  }

  ngOnInit():void{
  //  this.profileService.myAccount$.subscribe(profile=>this.myImage = profile.profile_pic);
  }

}
