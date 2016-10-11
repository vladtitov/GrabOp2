/**
 * Created by Vlad on 9/19/2016.
 */
import {Component} from "@angular/core";
import {FormGroup, FormBuilder} from "@angular/forms";
import {VOSearch} from "../models/vos";

@Component({
  selector:'form-search-advanced'
  ,template:`
<div>
<h2>Search Advanced</h2>
 <form  #f="ngForm" autocomplete="off" novalidate >
          <fieldset>          
              <div class="from-field">                
                <label>Search</label>
                <input  [(ngModel)]="search.pattern" name="pattern" />
              </div>
               <div class="from-field">                
                <label>Country</label>
                <input [(ngModel)]="search.country" name="lcountry" />
              </div>
               <div class="from-field">                
                <label>Province</label>
                <input [(ngModel)]="search.province" name="province" />
              </div>
               <div class="from-field">                
                <label>City</label>
                <input [(ngModel)]="search.city" name="city" />
              </div>
              
              <h4>Business Style</h4>
                   <div class="from-field">                
                    <label>Business Partnership</label>
                    <input [(ngModel)]="search.partnership" type="checkbox" name="partnership" />
                  </div>
                   <div class="from-field">                
                    <label>Exchange</label>
                    <input [(ngModel)]="search.exchange" type="checkbox" name="exchange" />
                  </div>
                   <div class="from-field">                
                    <label>Donate</label>
                    <input [(ngModel)]="search.donate"  type="checkbox" name ="donate" />
                  </div>
                   <div class="from-field">                
                    <label>Internship</label>
                    <input [(ngModel)]="search.internship" type="checkbox"  name="internship" />
                  </div>  
                  <div class="from-field">                
                    <label>Money</label>
                    <input [(ngModel)]="search.money" type="checkbox"  name="money" />
                  </div> 
                 
                 
              <div class="from-field">                
                <label>Fixed</label>
                <input [(ngModel)]="search.fixedFrom" name="fixedFrom" /> to  <input [(ngModel)]="search.fixedTo" name="fixedTo" />
              </div>
              
                  
              <div class="from-field">                
                <label>Hourly</label>
                <input [(ngModel)]="search.hourlyFrom" name="hourlyFrom" /> to  <input [(ngModel)]="search.hourlyTo" name="hourlyTo" />
              </div>
              
               <div class="from-field">                
                <label>Commission</label>
                <input [(ngModel)]="search.commissionFrom" name="commissionFrom" /> to  <input [(ngModel)]="search.commissionTo" name="commissionTo" />
              </div>
                 
                 
          </fieldset>          
          </form> 
     <div class="debug">
        <h3>Form Value:</h3>
        {{ f.value | json }}
      </div>   
   </div>   
 `
})
export class FormSearchAdvanced{

  search:VOSearch = new VOSearch({});

  constructor( private fb:FormBuilder){

  }
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
