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
<div>    <h5 class="text-md-center">Basic</h5>  
      <form #f="ngForm">
                 <div class="from-field">     
                  <label>Title</label>                 
                    <input type="text"  [(ngModel)]="model.title" name="name">                  
                </div>
                
               <div class="from-field">  
                  <label>Country</label>                  
                    <input [(ngModel)]="model.country" name="country" >                 
                </div>
                
                <div class="from-field">  
                  <label>Province</label>                  
                    <input  [(ngModel)]="model.province" name="province">                  
                </div>
                
               <div class="from-field">  
                  <label>City</label>                  
                    <input [(ngModel)]="model.city"  name="city">
                
                </div>
               <div class="from-field">  
                  <label>Category</label>
                 
                  <select  [(ngModel)]="model.categoryid" name="categoryid">
                                   <option *ngFor="let category of categories" [ngValue]="category.id">{{category.label}}</option>
                  </select>                   
                  
                </div>
                <div class="from-field">  
                  <label>Keywords</label>
                  <div>
                    <textarea [(ngModel)]="model.keywords" name="keywords" ></textarea>
                  </div>
                </div>
                <div class="from-field"> 
                  <label >Description</label>
                  <div>
                    <textarea [(ngModel)]="model.description" name="description"> </textarea>
                  </div>
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
