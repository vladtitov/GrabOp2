/**
 * Created by Vlad on 9/10/2016.
 */
import {Component, OnInit, Input} from "@angular/core";
import {VOService, VOUserExt} from "../models/vos";


@Component({
  selector:'profile-header',
  template:`
<div>     
      Profile header
      <div>{{user.jobtitle}}</div>
      <button routerLink="/profile-edit" routerLinkActive="menu-active"   class="btn btn-primary">edit profile</button>
      
</div>
`
})
export class ProfileHeader implements OnInit{
  @Input() user:VOUserExt;
  size:number= 256;
  constructor(){

  }

  ngOnInit():void{

  }

  loadServices():void{

  }

}
