/**
 * Created by Vlad on 9/10/2016.
 */import {Component, OnInit, Input, OnChanges, SimpleChange} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {VOSettings, VOService} from "../models/vos";
import {PostEditService} from "./posts-edit-service";
@Component({
  selector:'post-edit-tools',
  template:`
<div class="myservice-tools">      
      <button class="btn btn-primary" >edit</button>
       <button class="btn btn-primary" >edit alliance</button>
        <button class="btn btn-primary" >duplicate</button>
         <button class="btn btn-primary" >hide service</button>
         <button class="btn btn-default" >delete service</button>    

</div>
`
})
export class PostEditTools implements OnInit{

  currentService:VOService


  constructor(private myService:PostEditService){

    myService.myService.subscribe(
      service=>{
        this.currentService = service
        console.log(service);

      }
    )
  }


  ngOnInit():void{

    //this.loadService();
  }



}
