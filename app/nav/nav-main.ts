/**
 * Created by Vlad on 9/5/2016.
 */
import {Component, OnInit, ChangeDetectorRef} from "@angular/core";
import {NavService} from "./nav-service";
import {VONavigation, VONavigationItem} from "../models/vos";
import {Router} from "@angular/router";
@Component({
  selector:'nav-main'
  ,template:`
    <nav [ngStyle]="myStyle" [class.open]="isOpen">
    <span class="pull-right fa fa-close" (click)="onCloseClick()"></span>
        Nav Main
        
      <ul>
        <li *ngFor="let mynav of navigation">
        <a routerLinkActive="menu-active" routerLink="{{mynav.href}}">{{mynav.label}}</a>        
        </li>    
      </ul>   
    </nav>
`
  ,providers:[]
})
export class NavMain implements OnInit{

  navigation:VONavigationItem[];
  myStyle:any;
  isOpen:boolean =false;

  constructor(private navSevice:NavService,private router:Router,private changes:ChangeDetectorRef){


  }
  onCloseClick():void{
   this.navSevice.hideMenu();
  }

  ngOnInit():void{
    this.navSevice.change.subscribe(
      (res:{visible:boolean})=>{
        this.isOpen = res.visible
      }
    )


    this.navSevice.getNavigationP().then(
      (res:VONavigation)=>{
        this.navigation = res.list;
        this.myStyle = res.css;
      },err=>this.onError(err)
    )

  }
  onError(err:any):void{
console.error('NavMain' ,err);
  }
}
