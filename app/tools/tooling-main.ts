/**
 * Created by Vlad on 9/5/2016.
 */
import {Component} from "@angular/core";
import {NavService} from "../nav/nav-service";
import {UserService} from "../myservices/user-service";
@Component({
  selector:'tooling-main'
  ,template:`
<div class="container">

  <div class="row hidden-sm-up">
    <div class="pull-xs-left">GarbOp</div>
    <tools-help class="pull-xs-right"></tools-help> 
  </div>
  <div class="row">
    <div class="col-xs-2">
      <a class="fa fa-bars" (click)="onNavClick()"></a>
    </div>
    <div class="col-xs-2">
      <tools-search ></tools-search>
    </div>
      <div class="hidden-xs-down">
      <tools-explore></tools-explore>
    </div>
    <div class="col-xs-2">
       <tools-post></tools-post>
    </div>
    <div class="col-xs-2">
      <tools-personal></tools-personal>  
    </div>
    <div class="hidden-xs-down">
        <tools-help></tools-help>
     </div>
     <div class="col-xs-2">
      <tools-menu></tools-menu>
     </div>
     <div class="col-xs-2">
      <tools-notifications></tools-notifications>
    </div> 
    <a  class="btn" (click)="onLogout()">Logout</a>      
  </div>     
</div>         
`

})
export class ToolingMain{
  constructor(private navSevice:NavService,private accountService:UserService){

  }
  onLogout():void{
    this.accountService.logout({lastURL:'none'}).subscribe(
      res=>{

      }
    );
  }

  onNavClick():void{
    this.navSevice.showMenu();
  }
}
