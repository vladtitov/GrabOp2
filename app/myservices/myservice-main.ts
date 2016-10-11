/**
 * Created by Vlad on 9/9/2016.
 */
import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {VOSettings} from "../models/vos";
import {PostEditService} from "../post-edit/posts-edit-service";
@Component({
  template:`
<div class="container">
      <h1>Services Main</h1>
      <myservice-details [my_service_id]="currentServiceId"></myservice-details>
      <post-edit-tools></post-edit-tools>
      
       <my-profile></my-profile>
       <members-list [my_type]="members"></members-list>
        <members-list [my_type]="recommended"></members-list>
      <posts-list></posts-list>
           

</div>
`
})
export class MyServicesMain implements OnInit{

  currentService:any;
  myServices:any[];
  currentServiceId:number;
  constructor(private aroute:ActivatedRoute,private router:Router,private myService:PostEditService){

  }

  ngOnInit():void{
    this.aroute.params.subscribe(params=>{
      let id:number = +params['id'];
      if(isNaN(id)) return;
     // this.currentServiceId = id;
      this.myService.selectServiceById(id);

    })
   // this.loadServices();
  }

  loadServices():void{

   /* this.myService.getMyServices(1).subscribe(
      services=>{
        console.log(services);
      }
    )*/
  }

}
