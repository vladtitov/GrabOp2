/**
 * Created by Vlad on 9/5/2016.
 */
import {Component, OnInit, Input, OnDestroy} from "@angular/core";

import {VOAccount, VOUserExt} from "../models/vos";
import {Router, ActivatedRoute} from "@angular/router";
import {FormGroup, FormBuilder, FormControl, Validators} from "@angular/forms";
import {JoinUsService} from "./login-service";
import {Subscription} from "rxjs/Subscription";


@Component({
  template:`
        <form #f="ngForm"  autocomplete="off" novalidate>
          <div class="form-group row">
            <label class="col-sm-4 col-form-label">First Name:</label>
             <div class="col-sm-6">
              <input [(ngModel)]="model.firstName" name="firstName">
            </div>
          </div>
          <div class="form-group row" >
            <label class="col-sm-4 col-form-label"   for="lastname">Last Name:</label>
              <div class="col-sm-6">
               <input  [(ngModel)]="model.lastName" name="lastName" >
            </div>
          </div>
           <div class="form-group row" [formGroup]="myForm">
            <label class="col-sm-4 col-form-label"   for="username">Username:</label>
              <div class="col-sm-6">
               <input formControlName="username" name="username" (blur)="onUsernameBlur()"  >
            </div>
          </div>
          <div class="form-group row" [formGroup]="myForm">
            <label class="col-sm-4 col-form-label"  for="email">Email:</label>
             <div class="col-sm-6">
             <input formControlName="PrimaryEmail" name="PrimaryEmail">
            </div>
          </div>
             
                <div class="form-group row">
                  <label class="col-sm-4 col-form-label">Password:</label>
                    <div class="col-sm-6">
                 <input [(ngModel)]="model.password"  (ngModelChange)="onPasswordChanged($event)" name="password">
                  </div>
                </div>
                 <div class="form-group row">
                  <label class="col-sm-4 col-form-label" for="repassword">Re-confirm Password:</label>
                  <div class="col-sm-6">
                  <input [formControl]="confirm"/>
                  </div>
                </div> 
             
          
        </form>    
  <button  class="pull-right" [disabled] ="!f.valid" (click)="onNextClick()">Company</button>
  
   <div class="debug"> {{ f.valid | json }} </div>
  <div class="debug"> {{ model | json }} </div>
`

})
export class JoinUsUsername  implements OnInit, OnDestroy{
  model:VOAccount;
  myForm:FormGroup;
  password:string='';
  confirm;
  sb1:Subscription;
  username:string;

constructor(private router:Router, private route:ActivatedRoute, private fb:FormBuilder, private joinusService:JoinUsService){

  this.model = joinusService.account;

 this.password = this.model.password;

  this.confirm = new FormControl(this.password, [(fc)=>this.areEqual(this.password,fc)]);

 // var password = new FormControl(this.password,[Validators.required,Validators.minLength(3)]);

        this.myForm =fb.group({
          username:[this.model.username,[Validators.required,Validators.minLength(5),this.validateUsername.bind(this)]],
          PrimaryEmail:[this.model.PrimaryEmail]
          });

 /// password.registerOnChange((val)=>{
 //   console.log(val);
//  })

  this.sb1 = route.params.subscribe(params=>{
    //console.log(params);
  })



}
  validateUsername(ctr:FormControl):any{
var service:JoinUsService = this.joinusService;

    var p =  new Promise(resolve=>{

      service.exists(ctr.value).then(
        res=>{

        }
      )
    })
    //setTimeout(())
    console.log(ctr);
    return p;

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

  ngOnDestroy():void{
    this.sb1.unsubscribe();

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

  onUsernameBlur():void{
    this.joinusService.exists(this.model.username).then(
res=>{
  console.log(res);
  //this.userna.valid = false;
}
    )
    console.log(this.model.username);
  }

  evalueateForm():boolean{
  return true;
  }


  onNextClick():void{

  /*  this.person.password= this.myForm.value['password'];
    this.person.username= this.myForm.value['username'];
    this.person.firstName = this.myForm.value['firstName'];
    this.person.lastName= this.myForm.value['lastName'];
    this.person.PrimaryEmail = this.myForm.value['PrimaryEmail'];*/

    if(this.evalueateForm()) this.router.navigate(['../company'],{ relativeTo: this.route});


  }
}
