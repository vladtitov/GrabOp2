/**
 * Created by Vlad on 9/10/2016.
 */
import {Component, OnInit, Input, OnChanges, SimpleChange} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {VOSettings, VOService, VOPost} from "../models/vos";
import {PostEditService} from "./posts-edit-service";
@Component({
  selector:'post-edit-style',
  template:`
<div >
           <h6 class="text-sm-right">Offering:Service Title</h6>            
           <form #f="ngForm" class="form-horizontal">
              <div>                    
                  <div class="form-group has-success">
                    <label class="custom-control custom-checkbox col-sm-offset-2">
                      <input type="checkbox" class="custom-control-input" [(ngModel)]="model.businessPartnership" name="businessPartnership">
                      <span class="custom-control-indicator"></span>
                      <span class="custom-control-description">Business Partnership</span>
                    </label>
                  </div>
                  
                  <div class="form-group has-warning">
                    <label class="custom-control custom-checkbox col-sm-offset-2">
                      <input type="checkbox" class="custom-control-input" [(ngModel)]="model.exchange" name="exchange">
                      <span class="custom-control-indicator"></span>
                      <span class="custom-control-description">Exchange</span>
                    </label>
                  </div>
                  
                  <div class="form-group has-danger m-b-0">
                    <label class="custom-control custom-checkbox col-sm-offset-2">
                      <input type="checkbox" class="custom-control-input" [(ngModel)]="model.donate" name="donate">
                      <span class="custom-control-indicator"></span>
                      <span class="custom-control-description">Donate</span>
                    </label>
                  </div>
                  
                  <div class="form-group has-warning">
                    <label class="custom-control custom-checkbox col-sm-offset-2">
                      <input type="checkbox" class="custom-control-input" [(ngModel)]="model.internship" name="internship">
                      <span class="custom-control-indicator"></span>
                      <span class="custom-control-description">Intership</span>
                    </label>
                  </div>
                  
                  <div class="form-group has-danger m-b-0">
                    <label class="custom-control custom-checkbox col-sm-offset-2">
                      <input type="checkbox" class="custom-control-input" [(ngModel)]="model.money" name="money">
                      <span class="custom-control-indicator"></span>
                      <span class="custom-control-description">Money</span>
                    </label>
                  </div>
              </div>
              
              <div>
                 <div class="form-group">  
                  <label class="col-sm-6 control-label">Fixes $</label>                 
                    <input [(ngModel)]="model.fixed" name="name">                  
                </div>
                
                  <div class="form-group">  
                  <label class="col-sm-6 control-label">Hourly $</label>                  
                    <input [(ngModel)]="model.hourlyRate" name="country" >                  
                </div>
                
                 <div class="form-group">  
                  <label class="col-sm-6 control-label">Commission $</label>
                    <input  [(ngModel)]="model.commission" type="text"  name="province">
                 </div> 
                             
              </div>           
          </form>
          
          <div class="debug">{{ model | json }}</div>  

</div>
`
})
export class PostEditStyle implements OnInit, OnChanges{

  @Input() model:VOPost;
  @Input() model_id:number;

  constructor(){

  }

  ngOnChanges(obj:any):void{


  }
  ngOnInit():void{

  }

}
