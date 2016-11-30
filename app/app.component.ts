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
    <tooling-main></tooling-main>
    <div class="container">
        <div id="MyMainOutlet">
         <router-outlet></router-outlet> 
        </div>
         
        <div id="MyModalWindow">
          <router-outlet name="important"></router-outlet> 
        </div>
    </div>      
</div>
`
})
export class AppComponent {

  isLogin:boolean;

  constructor(private router:Router, private aroute:ActivatedRoute){
    // console.log('App main');

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
