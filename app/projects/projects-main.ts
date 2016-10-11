import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";
@Component({
  template:`
<div>
        <h2>Projects Main</h2>
         <nav>
              <a routerLink="../invitations" routerLinkActive="menu-active" >Invitations</a>
              <a routerLink="../joined" routerLinkActive="menu-active" >Joined</a>
              <a routerLink="../created" routerLinkActive="menu-active" >Created</a>
      </nav>
      <div>
        
      </div>
</div>
`

})
export  class ProjectsMain implements OnInit{


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
