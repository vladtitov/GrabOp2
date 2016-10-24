/**
 * Created by Vlad on 9/10/2016.
 */
import {Component, OnInit, Input, OnChanges, SimpleChange} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {VOSettings, VOService, VOPost, VOCategory} from "../models/vos";
import {PostEditService} from "./posts-edit-service";
@Component({
  selector:'post-edit-basic',
  template:`
<div>    
      <h6 class="text-sm-right">Offering:Service Title</h6>  
      <form #f="ngForm" class="form-horizontal">
                <div class="form-group row">     
                  <label class="col-sm-3 control-label">Service Title</label>
                  <input class="col-sm-5" [(ngModel)]="model.title" name="name">                  
                </div>
                
               <div class="form-group row">  
                  <label class="col-sm-3 control-label">Country</label>                  
                  <input class="col-sm-5" [(ngModel)]="model.country" name="country" >                 
                </div>
                
                <div class="form-group row">  
                  <label class="col-sm-3 control-label">Province</label>                  
                  <input class="col-sm-5" [(ngModel)]="model.province" name="province">                  
                </div>
                
               <div class="form-group row">  
                  <label class="col-sm-3 control-label">City</label>                  
                  <input class="col-sm-5" [(ngModel)]="model.city"  name="city">
                
                </div>
               <div class="form-group row">  
                  <label class="col-sm-3">Category</label>
                      <select class="col-sm-5" [(ngModel)]="model.categoryid" name="categoryid">
                           <option *ngFor="let category of categories" [ngValue]="category.id">{{category.label}}</option>
                      </select>                   
                </div>
                <div class="form-group row">  
                  <label class="col-sm-3 control-label">Keywords</label>
                  <textarea class="col-sm-5" [(ngModel)]="model.keywords" name="keywords" ></textarea>
                </div>
                <div class="form-group row"> 
                  <label class="col-sm-3 control-label">Description</label>
                  <textarea  class="col-sm-5"[(ngModel)]="model.description" name="description"> </textarea>
                </div>                
      </form>
        
         <div class="debug">{{ model | json }}</div>
</div>
`
})
export class PostEditBasic implements OnInit, OnChanges{

  @Input() model:VOPost;
  @Input() model_id:number;
  categories:VOCategory[];
  constructor(private postEditService:PostEditService){

  }

  ngOnChanges(obj:any):void{
    // console.log(obj)
    // if(obj.my_service_id && this.my_service_id !== obj.my_service_id)  this.loadService();

  }
  ngOnInit():void{
    this.postEditService.getCategories().then( res=>this.categories=res);


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
