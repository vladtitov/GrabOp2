import {Component, OnInit, Input} from "@angular/core";
import {VOService, VOUserExt} from "../models/vos";


@Component({
  selector:'profile-title',
  template:`
<div >     
      Profile Title

</div>
`
})
export class ProfileTitle implements OnInit{
  @Input()user:VOUserExt;
  size:number= 256;
  constructor(){

  }

  ngOnInit():void{

  }

  loadServices():void{

  }

}
