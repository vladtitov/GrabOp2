/**
 * Created by Vlad on 9/10/2016.
 */
import {Component, OnInit, Input, OnChanges, SimpleChange} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {VOSettings, VOService, VOPost} from "../models/vos";
import {PostEditService} from "./posts-edit-service";
@Component({
  selector:'post-edit-alliance',
  template:`
<div>
      <h5 class="text-md-center">Alliance</h5>             
           <form #myForm="ngForm">                      
               <div class="form-group has-danger m-b-0">
                    <label class="custom-control custom-checkbox">
                      <input type="checkbox" class="custom-control-input" [(ngModel)]="model.openToAllianace" name="openToAllianace">
                      <span class="custom-control-indicator"></span>
                      <span class="custom-control-description">Open to join</span>
                    </label>
                </div>  
                 <div class="form-group has-danger m-b-0">
                    <label class="custom-control custom-checkbox">
                      <input type="checkbox" class="custom-control-input" [(ngModel)]="model.visibleToPublic" name="visibleToPublic">
                      <span class="custom-control-indicator"></span>
                      <span class="custom-control-description">Visible to public</span>
                    </label>
                </div>            
            </form>
            
            <div>
                <div class="form-group">
                  <label >Invite people to your alliance</label>
                  <input type="search" class="form-control"  placeholder="Enter a name" name="ivite">
                </div>            
            </div>
            
            <div>
            
            
              <members-list></members-list>
                       <button class="btn btn-primary">remove</button>
                       <button class="btn btn-primary">message</button>            
            </div> 
                  
                  
       <div class="debug">{{ model | json }}</div>

</div>
`
})
export class PostEditAlliance implements OnInit, OnChanges{

  @Input() model:VOPost;
  @Input() model_id:number;

  constructor(){

  }

  ngOnChanges(obj:any):void{


  }
  ngOnInit():void{

  }



}
