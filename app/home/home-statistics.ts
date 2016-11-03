/**
 * Created by Vlad on 9/6/2016.
 */
/**
 * Created by Vlad on 9/6/2016.
 */
import {Component} from "@angular/core";
import {UserService} from "../myservices/user-service";
@Component({
  selector:'home-statistics'
  ,template:`
<div class="statistics">
    <div class="row">
        <div class="col-md-2">
          <div class="card text-md-center">
                <div class="card-header">Profile Views</div>
                <div class="card-block text-primary"><h5>{{statistics?.profile_views}}</h5></div>          
          </div>
        </div>
        <div class="col-md-2">
           <div class="card text-md-center">
                <div class="card-header">Connections</div>
                <div class="card-block text-primary"><h5>{{statistics?.connections}}</h5></div>          
           </div>
        </div>
        <div class="col-md-2">
           <div class="card text-md-center">
                <div class="card-header">Trusted by</div>
                <div class="card-block text-primary"><h5>{{statistics?.trusted_by}}</h5></div>          
          </div>
        </div>
        <div class="col-md-3">
           <div class="card text-md-center">
                <div class="card-header">Total Alliance Members</div>
                <div class="card-block text-primary"><h5>{{statistics?.total_alliance_members}}</h5></div>          
          </div>
        </div>
        <div class="col-md-2">
          <div class="card text-md-center">
                <div class="card-header">Total Sales</div>
                <div class="card-block text-primary"><h5>{{statistics?.total_sales}}</h5></div>          
          </div>
        </div>
  </div>
</div>
`
})
export class HomeStatistics{
    statistics:any;


    constructor(private userService:UserService){  }

    ngOnInit(){
        this.userService.getStatistics().subscribe(res=>{
            this.statistics = res;
            console.log('statistics', this.statistics);
        });
        // this.statistics = this.statistics.VOResalt;
    }
}
