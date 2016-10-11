/**
 * Created by Vlad on 9/5/2016.
 */
import {Component, OnInit, Input, OnDestroy, AfterViewInit} from "@angular/core";

import {VOAccount, VOUserExt, VOUser} from "../models/vos";
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
          <div class="form-group row">
            <label class="col-sm-4 col-form-label"   for="lastname">Last Name:</label>
              <div class="col-sm-6">
               <input  [(ngModel)]="model.lastName" name="lastName" >
            </div>
          </div>
           <div class="form-group row">
            <label class="col-sm-4 col-form-label"   for="username">Username:</label>
              <div class="col-sm-6">
               <input [(ngModel)]="model.username" name="username" (focus)="onUsernameFocus()" (blur)="onUsernameBlur()" required minlength="6" maxlength="100">
              <div *ngIf="usernameMsg">{{usernameMsg}}</div>
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-4 col-form-label"  for="email">Email:</label>
             <div class="col-sm-6">
             <input [(ngModel)]="model.email" name="email" (focus)="onEmailFocus()" (blur)="onEmailBlur()" required type="email" minlength="6" maxlength="100">
             <div *ngIf="emailMsg">{{emailMsg}}</div>
             <div *ngIf="restoreUsername"><a [routerLink]="['/restore-username']">Restore Username</a> </div>
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
  <button  class="pull-right" 
    [disabled] ="!(usernameOK && emailOK && passwordOK)"
   (click)="onNextClick()">Company</button>   
   <div class="debug"> {{ f.valid | json }} </div>
  <div class="debug"> {{ model | json }} </div>
`

})
export class JoinUsUsername  implements OnInit, OnDestroy{
  model:VOAccount;
 // myForm:FormGroup;
  password:string='';
  confirm;
  sb1:Subscription;
  usernameMsg:string;
  usernameOK:boolean;
  emailOK:boolean;
  passwordOK:boolean;
  emailMsg:string;
  formValid:boolean;
  restoreUsername:boolean;


constructor(private router:Router, private route:ActivatedRoute, private fb:FormBuilder, private joinusService:JoinUsService){

  this.sb1 = route.params.subscribe(params=>{
    //console.log(params);
  })



}

  areEqual(password:string,repeat:any) {
   // console.log(password,repeat.value);
    if(password==repeat.value){
      this.passwordOK = true;
      return null;
    }else{
      this.passwordOK = false;
      return {areEqual:false}
    }

  }

  onPasswordChanged(evt):void{
    this.password = evt;
    this.confirm.updateValueAndValidity();
  }


  ngOnInit():void{
    this.model =  this.joinusService.account;
    this.password = this.model.password;
    this.confirm = new FormControl(this.password, [(fc)=>this.areEqual(this.password,fc)]);
  }

  ngOnDestroy():void{
    this.sb1.unsubscribe();

  }


  onUsernameFocus():void{
    this.usernameMsg = '';
  }
  onUsernameBlur():void{
    this.joinusService.exists({username:this.model.username},'username').then(
      res=>{
        console.log(res);
        if(res.error=='exists'){
          this.usernameOK = false;
          this.usernameMsg='Username exists';
        }else if(res.success){
          this.usernameOK = true;
          this.usernameMsg='OK';
        }
    })
  }

  onEmailFocus():void{

    this.emailMsg= '';
    this.restoreUsername=false;
  }
    onEmailBlur():void{
      this.joinusService.exists({email:this.model.email},'email').then(
      res=>{
        console.log(res);
        if(res.error=='exists'){
          this.emailOK= false;
          this.emailMsg='email exists';
          this.restoreUsername=true;

        }else if(res.success) {
          this.emailMsg='OK';
          this.emailOK = true;
        }

        //this.userna.valid = false;
      })

  }

  evalueateForm():boolean{
  return true;
  }


  goNext():void{
    this.router.navigate(['../company'],{ relativeTo: this.route});
  }
  onNextClick():void{
    this.joinusService.createAccount(this.model).then(
      res=>{
        if(res.success) this.goNext();
        else this.usernameOK = false;
      }
    )

  }
}
