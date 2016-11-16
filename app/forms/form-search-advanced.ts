/**
 * Created by Vlad on 9/19/2016.
 */
import {Component, Output, EventEmitter} from "@angular/core";
import {FormGroup, FormBuilder, NgForm} from "@angular/forms";
import {VOSearch} from "../models/vos";
// import {PostEditService} from "../post-edit/posts-edit-service";
import {SearchService} from "../search/search-service";

@Component({
  selector:'form-search-advanced'
  ,template:`
<div>
    <h3 class="text-muted text-xs-center">Advanced search</h3>
    <br>
    <form  #f="ngForm" autocomplete="off" novalidate class="form-horizontal"> <!-- (ngSubmit)="onSubmit(f)" -->
              <div class="form-group row">                
                <label class="col-sm-3 text-sm-right">Search</label>
                <input class="col-sm-8" [(ngModel)]="search.pattern" name="pattern" />
              </div>
               <div class="form-group row">                
                <label class="col-sm-3 text-sm-right">Country</label>
                <input class="col-sm-8" [(ngModel)]="search.country" name="country" />
              </div>
               <div class="form-group row">                
                <label class="col-sm-3 text-sm-right">Province</label>
                <input class="col-sm-8" [(ngModel)]="search.province" name="province" />
              </div>
               <div class="form-group row">                
                <label class="col-sm-3 text-sm-right">City</label>
                <input class="col-sm-8" [(ngModel)]="search.city" name="city" />
              </div>
          <br>
              <h5>Business Style</h5>
               <div class="form-group has-success">                
                    <label class="custom-control custom-checkbox offset-sm-3">
                        <input [(ngModel)]="search.partnership" type="checkbox" class="custom-control-input" name="partnership" />
                        <span class="custom-control-indicator"></span>
                        <span class="custom-control-description">Business Partnership</span>
                    </label>
               </div>
               <div class="form-group has-warning">                
                    <label class="custom-control custom-checkbox offset-sm-3">
                        <input [(ngModel)]="search.exchange"  type="checkbox" class="custom-control-input" name="exchange" />
                        <span class="custom-control-indicator"></span>
                        <span class="custom-control-description">Exchange</span>
                    </label>
               </div>
               <div class="form-group has-danger">                
                    <label class="custom-control custom-checkbox offset-sm-3">
                        <input [(ngModel)]="search.donate" class="custom-control-input" type="checkbox" name ="donate" />
                        <span class="custom-control-indicator"></span>
                        <span class="custom-control-description">Donate</span>
                    </label>
              </div>
               <div class="form-group has-warning">                
                    <label class="custom-control custom-checkbox offset-sm-3">
                        <input [(ngModel)]="search.internship" class="custom-control-input" type="checkbox"  name="internship" />
                        <span class="custom-control-indicator"></span>
                        <span class="custom-control-description">Internship</span>
                    </label>
              </div>  
              <div class="form-group has-danger">
                    <label class="custom-control custom-checkbox offset-sm-3">
                        <input [(ngModel)]="search.money" class="custom-control-input" type="checkbox"  name="money" />
                        <span class="custom-control-indicator"></span>
                        <span class="custom-control-description">Money</span>
                    </label>
              </div>
              
          
              <div class="form-group form-inline row">                
                <label class="col-sm-4 text-sm-right pl-pr-0"><span class="text-warning">Fixed </span>$</label>
                <input class="col-sm-3" [(ngModel)]="search.fixedFrom" name="fixedFrom" /> 
                <label class="col-sm-1">to</label>  
                <input class="col-sm-3" [(ngModel)]="search.fixedTo" name="fixedTo" />
              </div>
              
              <div class="form-group row">                
                <label class="col-sm-4 text-sm-right pl-pr-0"><span class="text-warning">Hourly </span>$</label>
                <input class="col-sm-3" [(ngModel)]="search.hourlyFrom" name="hourlyFrom" />
                <label class="col-sm-1">to</label>
                <input class="col-sm-3" [(ngModel)]="search.hourlyTo" name="hourlyTo" />
              </div>
              
               <div class="form-group row">                
                <label class="col-sm-4 text-sm-right pl-pr-0"><span class="text-warning">Commission </span>%</label>
                <input class="col-sm-3" [(ngModel)]="search.commissionFrom" name="commissionFrom" />
                <label class="col-sm-1">to</label>
                <input class="col-sm-3" [(ngModel)]="search.commissionTo" name="commissionTo" />
              </div>
          <!--<button class="btn btn-primary btn-lg btn-block">search</button>-->
          <button class="btn btn-primary btn-lg btn-block" (click)="onSearchClick()">search</button>
    </form>
    <div class="debug">
        <h6>Form Value:</h6>
        {{ f.value | json }}
    </div>
</div>   
 `
,styles:[`
        .pl-pr-0{
            padding-left: 0;
            padding-right: 0;
        }
`]
})
export class FormSearchAdvanced{

  search:VOSearch = new VOSearch({});

    @Output("search") searchOut = new EventEmitter();

  constructor( private postsService:SearchService){

  }

    onSearchClick(){
        var searchPOst:VOSearch = new VOSearch({});
        for(var key in this.search){
            if(this.search[key] !== "") searchPOst[key] = this.search[key];
        }
        this.postsService.searchPosts(searchPOst);
        console.log('search', searchPOst);
        // this.searchOut.emit(this.search);
    }

    // onSearchClick(){
    //     console.log('search', this.search);
    //     this.searchOut.emit(this.search);
    // }

    // onSubmit(f: NgForm){
    //     // this.search = f.value;
    //     // console.log('search', this.search);
    //     console.log('f.value', f.value);
    // }

  /*
  * export class VOSearch{
   pattern:string;
   country:string;
   province:string;
   city:string;
   partnership:boolean;
   exchange:boolean;
   donate:boolean;
   internship:boolean;
   money:boolean;
   fixedFrom:number;
   fixedTo:number;
   hourlyFrom:number;
   hourlyTo:number;
   commissionFrom:number;
   commissionTo:number;

   }
   */
}
