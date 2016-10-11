/**
 * Created by Vlad on 9/11/2016.
 */
/**
 * Created by Vlad on 9/10/2016.
 */
import {Component, OnInit, Input} from "@angular/core";
import {VOService, VOUserExt} from "../models/vos";


@Component({
  selector:'profile-connections',
  template:`
<div>     
    Profile Connections of <span>{{user.firstName}}</span>    

</div>
`
})
export class ProfileConnections implements OnInit{

  @Input() user:VOUserExt;

  size:number= 256;
  constructor(){

  }

  ngOnInit():void{

  }

  loadServices():void{

  }

}
