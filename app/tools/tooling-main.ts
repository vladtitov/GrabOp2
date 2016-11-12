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
    <div class="card-block">
          <div class="row hidden-sm-up">
            <div class="pull-xs-left">GarbOp</div>
            <tools-help class="pull-xs-right"></tools-help> 
          </div>
          <div class="row">
            <div class="col-xs-1">
                <a class="fa fa-bars" (click)="onNavClick()"></a>
            </div>
            <div class="col-xs-4">
                <tools-search></tools-search>
            </div>
            <div class="col-xs-1 hidden-xs-down">
                <tools-explore></tools-explore>
            </div>
            <div class="col-xs-1">
                <tools-post></tools-post>
            </div>
            <div class="col-xs-1">
                <tools-personal></tools-personal>  
            </div>
            <div class="col-xs-1 hidden-xs-down">
                <tools-help></tools-help>
             </div>
             <div class="col-xs-1">
                <tools-menu></tools-menu>
             </div>
             <div class="col-xs-1">
                <tools-notifications></tools-notifications>
             </div>
             <div class="col-xs-1 text-xs-right">
                <a class="btn btn-outline-danger" (click)="onLogout()">Logout</a>
             </div>      
          </div>
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
