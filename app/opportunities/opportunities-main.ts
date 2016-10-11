/**
 * Created by Vlad on 9/16/2016.
 */
import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";
@Component({
  template:`
<div>
        <h2>Opportunities Main</h2>
         <nav>
              <a routerLink="../panding" routerLinkActive="menu-active" >Panding</a>
              <a routerLink="../active" routerLinkActive="menu-active" >Active</a>
              <a routerLink="../complete" routerLinkActive="menu-active" >Complete</a>
      </nav>
      <div>
        
      </div>
</div>
`
})
export  class OpportunitiesMain implements OnInit{

  topic:string;
  constructor(private router:Router,private aroute:ActivatedRoute){

  }

  ngOnInit():void{

    this.aroute.params.subscribe(
      params=>{
        console.log(params);
        this.topic =  params['id'];
      }
    )
  }
}
