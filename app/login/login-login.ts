import {Component, AfterViewInit} from "@angular/core";
import {UserService} from "../myservices/user-service";
import {VOUser, VOSettings, VOAccount} from "../models/vos";
import {Router} from "@angular/router";
import {JoinUsService} from "../join-us/login-service";
@Component({
  selector:'login-login'
  ,template:`
<div class="modal fade" [class.d-block] ="isVisible" [class.in]="isIn">     
    <div class="modal-dialog">
        <div class="modal-content">
        <a  (click)="onCloseClick()" class="btn fa fa-close"></a>
                <div class="logo">
                    <img src="../../images/hero.png" alt="">
                </div>                
                
                    <div class="panel" id="login">
                        <h3>Sign in to your account</h3>
                        <hr>                                        
                        <div *ngIf="wrongMessage" class="errorMessage">
                            <h5> Incorrect username or password </h5>
                            <hr>
                        </div>
                        <!--<form action="account/login" method="post" role="form" #loginForm="ngForm">-->
                        <form (ngSubmit)="onSubmit(loginForm.value)" #loginForm="ngForm">                
                            <div class="form-group">
                                <input class="form-control"
                                    placeholder="username" 
                                    name="username"                                    
                                    required                         
                                   
                                   [(ngModel)]="user.username"
                                    />                                
                            </div>
                            <div class="form-group">
                                <input   class="form-control"  placeholder="Password"  name="password"    required  minLength = "6"  [type]="showPass ? 'text': 'password'"                
                                    
                                    [(ngModel)]="user.password"
                                                                      
                                />
                            </div>                            
                          
                            <button class="btn btn-primary btn-lg btn-block"
                                    type="submit" value="Log In"
                                    [style.cursor]="cursorStyle"
                                    [disabled]="toolsDisadled"><span class="fa fa-sign-in"></span>Sign In</button>
                        </form>
                        <a class="panel-footer"
                            (click)="newUser()"
                            [style.pointer-events]="hrefDisadled ? 'none' : 'auto'"><span class="fa fa-user-plus"></span>Create Account</a>
                    </div>
                    <a (click)="resetPass()"><span class="fa fa-unlock-alt"></span>Reset Password</a>                
                
            </div>
  </div>

</div>
`
})
export class LoginLogin implements AfterViewInit{

  user:VOAccount = new VOAccount({password:'mio,mio',username:'al3kosvh@gmail.com'});
  wrongMessage:boolean;
  isIn:boolean;
  isVisible:boolean = true;

  ngAfterViewInit():void{
    setTimeout(()=>{this.isIn= true;},100)

  }
  constructor(private serviceLogin:JoinUsService, private router:Router){

  }

  removeMe():void{
    this.router.navigate(['./', {outlets: {important: null}}]);
  }


  hideMe():void{
    this.isIn = false;
    setTimeout(()=>this.removeMe(),600)
  }

  onCloseClick():void{
    this.hideMe();
  }

  onSubmit(value:any):void{
    var user:VOAccount = new VOAccount(value);
   // console.log(user);
    this.serviceLogin.login(user).then(
      res=>{
        if(res.success){
          localStorage.setItem('person',JSON.stringify(res))
          this.removeMe();
          setTimeout(function(){
           // window.location.reload();
          },500);

        }

      }
    )
  }
}
