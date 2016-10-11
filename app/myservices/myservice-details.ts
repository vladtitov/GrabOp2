/**
 * Created by Vlad on 9/10/2016.
 */
import {Component, OnInit, Input, OnChanges, SimpleChange} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {VOSettings, VOService} from "../models/vos";
import {PostEditService} from "../post-edit/posts-edit-service";
@Component({
  selector:'myservice-details',
  template:`
<div class="container">
      <h1>Services Details</h1> 
           <div>{{currentService.title}}</div>

</div>
`
})
export class MyServiceDetails implements OnInit, OnChanges{

  currentService:VOService = new VOService({});
  @Input() my_service_id:number;

  constructor(private myService:PostEditService){

    myService.myService.subscribe(
      service=>{
        this.currentService = service
        console.log(service);

      }
    )
  }

  ngOnChanges(obj:any):void{
   // console.log(obj)
   // if(obj.my_service_id && this.my_service_id !== obj.my_service_id)  this.loadService();

  }
  ngOnInit():void{

    //this.loadService();
  }

  loadService():void{

    /*console.log('loadService()' +this.my_service_id)
    if(isNaN(this.my_service_id)) return;
    this.myService.getPostById(this.my_service_id).subscribe(
      res=>{
        this.currentService = res;
        //console.log(services);
      }
    )*/
  }

}
