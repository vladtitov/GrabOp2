/**
 * Created by Vlad on 9/5/2016.
 */
import {Component, AfterViewInit} from "@angular/core";
import {Router} from "@angular/router";
import {JoinUsService} from "./login-service";
@Component({
  template:`
<div id="JoinUsMain" [class.in]="isIn">
     <div class="content" >       
         <div class="card">    
                <div class="card-block ">                      
                           <a  (click)="onCloseClick()" class="btn fa fa-close pull-right"></a>                                                                    
                                              
                                      <router-outlet></router-outlet>           
                           
                       
                 </div>
          </div>    
      </div>
</div>
 `
})
export class JoinUsMain implements AfterViewInit{

  isIn:boolean;
  isVisible:boolean = true;

  constructor(private router:Router,private joinusService:JoinUsService){

  }

  ngAfterViewInit():void{
    setTimeout(()=>{this.isIn= true;},100)

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


}
