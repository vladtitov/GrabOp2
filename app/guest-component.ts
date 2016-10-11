import { Component } from '@angular/core';
import './rxjs-operators';
import {Router, ActivatedRoute} from "@angular/router";

@Component({
    selector: 'my-app',
    template: `
<div> 
<div  id="Navigation">
<nav-main></nav-main>
</div>
    <nav>    
      <a [routerLink]="[{outlets:{ important: ['join-us'] } }]" routerLinkActive="menu-active" [routerLinkActiveOptions]="{ exact: true }">Join US</a>
      <!--<a routerLink="/join-us/username" routerLinkActive="menu-active">JOIN US 2</a> -->
      <a  [routerLink]="[{outlets:{ important: ['sign-in'] } }]" routerLinkActive="menu-active" >Login</a>
    </nav>    
   
    <div id="MyMainOutlet">
     <router-outlet></router-outlet> 
    </div>     
      <div class="my-outlet">
          <router-outlet name="important"></router-outlet> 
      </div>     
      
</div>
`
})
export class GuestComponent {


  constructor(private router:Router, private aroute:ActivatedRoute){
    console.log('Guest');
  }
/*
  onLoginClick():void{
    console.log('click');
    var myurl = 'important:login';
    var url =`(${myurl})`;

   // console.log(this.aroute);
    this.router.navigate(['./(important:login)']);
    //this.router.navigateByUrl(url);
  }*/
}
