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
              <div class="form-group row">
                <div class="col-sm-2 offset-sm-2 text-sm-right">
                    <label>First Name</label>
                </div>
                <div class="col-sm-8 text-sm-left">
                    <input  [(ngModel)]="person.firstName" name="firstName" />
                </div>
              </div>
               <div class="form-group row">
                <div class="col-sm-2 offset-sm-2 text-sm-right">
                    <label>Last Name</label>
                </div>
                <div class="col-sm-8 text-sm-left">
                    <input [(ngModel)]="person.lastName" name="lastName" />
                </div>
              </div>
               <div class="form-group row">
                <div class="col-sm-2 offset-sm-2 text-sm-right">
                    <label>Phone Number</label>
                </div>
                <div class="col-sm-8 text-sm-left">
                    <input [(ngModel)]="person.PhoneNumber" name="PhoneNumber" />
                </div>
              </div>
              <div class="form-group row">
                <div class="col-sm-2 offset-sm-4 text-sm-left">
                <div class="form-check has-success">
                  <label class="form-check-label">
                    <input [(ngModel)]="person.phoneVisible" name="phoneVisible" type="checkbox" class="form-check-input" id="checkboxSuccess" value="true">
                    Make Visible
                  </label>
                </div>
                </div>
              </div>
               <div class="form-group row">
                <div class="col-sm-2 offset-sm-2 text-sm-right">
                    <label>Email Address</label>
                </div>
                <div class="col-sm-8 text-sm-left">
                    <input [(ngModel)]="person.PrimaryEmail" name="PrimaryEmail" />
                </div>
              </div>
              <div class="form-group row">
                <div class="col-sm-2 offset-sm-4 text-sm-left">
                <div class="form-check has-success">
                  <label class="form-check-label">
                    <input [(ngModel)]="person.emailVisible" name="emailVisible" type="checkbox" class="form-check-input" id="checkboxSuccess" value="true">
                    Make Visible
                  </label>
                </div>
                </div>
              </div>
               <div class="form-group row">
                <div class="col-sm-2 offset-sm-2 text-sm-right">
                    <label>Country</label>
                </div>
                <div class="col-sm-8 text-sm-left">
                    <input [(ngModel)]="person.country" name="country" />
                </div>
              </div>
               <div class="form-group row">
                <div class="col-sm-2 offset-sm-2 text-sm-right">
                    <label>Province</label>
                </div>
                <div class="col-sm-8 text-sm-left">
                    <input [(ngModel)]="person.province" name="province" />
                </div>
              </div>
               <div class="form-group row">
                <div class="col-sm-2 offset-sm-2 text-sm-right">
                    <label>City</label>
                </div>
                <div class="col-sm-8 text-sm-left">
                    <input [(ngModel)]="person.city" name ="city" placeholder="city" />
                </div>
              </div>
               <div class="form-group row">
                <div class="col-sm-2 offset-sm-2">
                    <label>Personal Statement</label>
                </div>
                <div class="col-sm-8 text-sm-left">
                    <textarea [(ngModel)]="person.description" name="description" ></textarea>
                </div>
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
