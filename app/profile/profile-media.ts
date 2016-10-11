import {Component, OnInit, Input} from "@angular/core";
import {VOService, VOUserExt} from "../models/vos";


@Component({
  selector:'profile-media',
  template:`
<div>     
      Profile media
</div>
`
})
export class ProfileMedia implements OnInit{
  @Input()user:VOUserExt;
  size:number= 256;
  constructor(){

  }

  ngOnInit():void{

  }

  loadServices():void{

  }

}
