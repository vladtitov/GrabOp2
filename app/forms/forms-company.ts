/**
 * Created by Vlad on 9/18/2016.
 */
import {Component, OnInit, Input} from "@angular/core";
//import {UserService} from "../myservices/person-service";
import {VOUserExt, VOUser} from "../models/vos";
import {FormGroup, FormBuilder} from "@angular/forms";
@Component({
  selector:'forms-company'
  ,template:`
<form #f="ngForm"  autocomplete="off" novalidate>
          <fieldset>          
              <div class="from-field">              
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;<label>Job Title</label>
                <input  [(ngModel)]="person.jobtitle" name="jobtitle" />
              </div>
              
               <div class="from-field">                
               <input  [(ngModel)]="person.occupation" type="radio" name="occupation" value="company" checked>
                <label>Company</label>
                <input [(ngModel)]="person.company" name="company" />             
                  
                  <br> <input [(ngModel)]="person.occupation" type="radio" name="occupation" value="selfemployed"> Self Employed
                  <br><input  [(ngModel)]="person.occupation" type="radio" name="occupation" value="seeling"> Seeking an Opportunity
                 <br><input  [(ngModel)]="person.occupation" type="radio" name="occupation" value="other"> Other
                
              </div>             
          </fieldset>           
</form> 
    <div class="debug">{{ person | json }}</div>
`
})
export  class FormsCompany implements OnInit{
 // myGroup:FormGroup;
  myForm:FormGroup;
  @Input() person:VOUser;
  constructor(private fb:FormBuilder){


  }

  ngOnInit():void{

  }


}
