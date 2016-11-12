/**
 * Created by Vlad on 9/19/2016.
 */
import {Component} from "@angular/core";
@Component({
  template:`
    <h2>Search Main</h2>
    <div class="container">
        <div class="card-block">
            <div class="row">
                <div class="col-xs-4 br">
                    <form-search-advanced></form-search-advanced>
                </div>
                <div class="col-xs-8">
                    <search-result></search-result>
                </div>
            </div>  
        </div>
    </div>
        
 `
,styles:[`
        .br{
            border-right: solid 2px #c1c1c1;
        }
`]
})
export class SearchMain{


}
