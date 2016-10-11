import {Component, OnInit, Input} from "@angular/core";
import {VOService, VOUserExt} from "../models/vos";


@Component({
  selector:'profile-skills',
  template:`
<div >     
      Profile Skills
      <div>{{myskilles}}</div>

</div>
`
})
export class ProfileSkills implements OnInit{
  @Input() set user (user:VOUserExt){
          if(user && user.skillset) this.myskilles = user.skillset.join(' , ');
  }
  myskilles:string;
  size:number= 256;


  constructor(){

  }

  ngOnInit():void{


  }

  loadServices():void{

  }

}
