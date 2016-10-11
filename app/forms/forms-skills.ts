/**
 * Created by Vlad on 9/18/2016.
 */
import {Component, OnInit, Input} from "@angular/core";
//import {UserService} from "../myservices/person-service";
import {VOUserExt} from "../models/vos";
@Component({
  selector:'forms-skills'
  ,template:`
<div>
          <h2>Skills edit</h2>        
                  

 
</div>
`

})
export  class FormsSkills implements OnInit{

 @Input() account:VOUserExt
  constructor(){

  }

  ngOnInit():void{

    //this.accoutService.myAccount$.subscribe(person =>this.person = person)
  }


}
