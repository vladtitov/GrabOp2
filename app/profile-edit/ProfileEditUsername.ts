/**
 * Created by Vlad on 9/5/2016.
 */
import {Component, OnInit, Input} from "@angular/core";

import {VOAccount, VOUserExt} from "../models/vos";
import {Router, ActivatedRoute} from "@angular/router";
import {FormGroup, FormBuilder, FormControl, Validators} from "@angular/forms";
import {JoinUsService} from "../join-us/login-service";

@Component({
  template:`
<div>
    <div class="card">    
    <div class="card-block ">    
    
    <h2>Profile   Username</h2>
        <form #f="ngForm" [formGroup] = "myForm"  autocomplete="off" novalidate>
          <div class="form-group row">
            <label class="col-sm-4 col-form-label">First Name:</label>
             <div class="col-sm-6">
              <input formControlName="firstName" >
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-4 col-form-label"   for="lastname">Last Name:</label>
              <div class="col-sm-6">
               <input formControlName="lastName">
            </div>
          </div>
           <div class="form-group row">
            <label class="col-sm-4 col-form-label"   for="username">Username:</label>
              <div class="col-sm-6">
               <input  formControlName="username" >
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-4 col-form-label"  for="email">Email:</label>
             <div class="col-sm-6">
             <input formControlName="primaryEmail">
            </div>
          </div>
             
                <div class="form-group row">
                  <label class="col-sm-4 col-form-label">Password:</label>
                    <div class="col-sm-6">
                 <input formControlName="password"   (ngModelChange)="onPasswordChanged($event)">
                  </div>
                </div>
                 <div class="form-group row">
                  <label class="col-sm-4 col-form-label" for="repassword">Re-confirm Password:</label>
                  <div class="col-sm-6">
                  <input [formControl]="confirm"/>
                  </div>
                </div> 
             
          
        </form>    
  <a  class="pull-right" (click)="onNextClick()">Company</a>
  </div>
  <div class="debug"> {{ f.value | json }} </div>
  </div>
</div>
`

})
export class ProfileEditUsername  implements OnInit{
  account:VOAccount;
  myForm:FormGroup;
  password:string='';
  confirm;

  constructor(private router:Router, private route:ActivatedRoute, private fb:FormBuilder, private joinusService:JoinUsService){

    this.confirm = new FormControl('', [(fc)=>this.areEqual(this.password,fc)]);

    var password = new FormControl(this.password,[Validators.required,Validators.minLength(3)]);

    this.myForm =fb.group({
      firstName:['',[Validators.required]],
      lastName:[''],
      username:['',[Validators.required,Validators.minLength(5)]],
      primaryEmail:[''],
      password:password
    });

    password.registerOnChange((val)=>{
      console.log(val);
    })


    this.account = joinusService.account;
  }

  areEqual(password:string,repeat:any) {
    // console.log(password,repeat.value);
    if(password==repeat.value) return null;
    return {areEqual:false}
  }

  onPasswordChanged(evt):void{
    this.password = evt;
    this.confirm.updateValueAndValidity();
  }

  ngOnInit():void{

    // this.accountService.myAccount$.subscribe(person=>this.person = person);
  }

  fullUpdate() {
    this.myForm.setValue({
      username: " new username",
      email: "new email"
    });
  }

  reset() {
    this.myForm.reset();
  }



  evalueateForm():boolean{
    return true;
  }
  onNextClick():void{
    this.account.password= this.myForm.value['password'];
    this.account.username= this.myForm.value['username'];
    this.account.firstName = this.myForm.value['firstName'];
    this.account.lastName= this.myForm.value['lastName'];
    this.account.email = this.myForm.value['email'];

    if(this.evalueateForm()) this.router.navigate(['../company'],{ relativeTo: this.route});

    console.log(this.account)
  }
}

