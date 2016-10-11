/**
 * Created by Vlad on 9/18/2016.
 */
import {Component, OnInit, Input} from "@angular/core";
import {UserService} from "../myservices/user-service";
import {VOUserExt, VOUser} from "../models/vos";
import {FormGroup, FormBuilder} from "@angular/forms";
import {Subscription} from "rxjs";
@Component({
  selector:'forms-personal'
  ,template:`
<form  #f="ngForm" autocomplete="off" novalidate>
          <fieldset>          
              <div class="from-field">                
                <label>First Name</label>
                <input  [(ngModel)]="person.firstName" name="firstName" />
              </div>
               <div class="from-field">                
                <label>Last Name</label>
                <input [(ngModel)]="person.lastName" name="lastName" />
              </div>
               <div class="from-field">                
                <label>Phone Number</label>
                <input [(ngModel)]="person.PhoneNumber" name="PhoneNumber" />
              </div>
               <div class="from-field">                
                <label>Email Address</label>
                <input [(ngModel)]="person.PrimaryEmail" name="PrimaryEmail" />
              </div>
               <div class="from-field">                
                <label>Country</label>
                <input [(ngModel)]="person.country" name="country" />
              </div>
               <div class="from-field">                
                <label>Province</label>
                <input [(ngModel)]="person.province" name="province" />
              </div>
               <div class="from-field">                
                <label>City</label>
                <input [(ngModel)]="person.city" name ="city" placeholder="city" />
              </div>
               <div class="from-field">                
                <label>Statement</label>
                <textarea [(ngModel)]="person.description" name="description" ></textarea>
              </div>              
          </fieldset>          
</form> 
     <div class="debug">{{ person | json }}  </div>  

`

})
export  class FormsPersonal implements OnInit{

 @Input() person:VOUserExt;

  sb1:Subscription;
  constructor( private fb:FormBuilder){

  }

  ngOnInit():void{

  }


}
