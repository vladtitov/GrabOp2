/**
 * Created by Vlad on 9/16/2016.
 */
import {Component, OnInit, OnDestroy} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";
import {Observable, Subscription} from "rxjs";
@Component({
  template:`
<div>
        <h2>Alliances Main</h2>
        <nav>
              <a routerLink="../sent" routerLinkActive="menu-active" >Sent Requests</a>
              <a routerLink="../received" routerLinkActive="menu-active" >Received Requests</a>
              <a routerLink="../confirmed" routerLinkActive="menu-active" >Confirmed</a>
      </nav>
      <div>
        
      </div>
</div>
`

})
export  class AlliancesMain implements OnInit, OnDestroy{

  topic:string;
  sub1:Subscription;
  constructor(private router:Router,private aroute:ActivatedRoute){

  }

  ngOnInit():void{
    this.sub1 = this.aroute.params.subscribe(
      params=>{
        console.log(params);
        this.topic =  params['id'];
      }
    )
  }

  ngOnDestroy():void{
    this.sub1.unsubscribe();
  }


}
