/**
 * Created by Vlad on 9/19/2016.
 */
import {Component} from "@angular/core";
import {VOSearch} from "../models/vos";
import {ActivatedRoute} from "@angular/router";
import {SearchService} from "./search-service";
@Component({
  template:`
    <h2>Search Main</h2>
    <div class="container">
        <div class="card-block">
            <div class="row">
                <div class="col-xs-4 br">
                    <form-search-advanced (search)="onSearch($event)"></form-search-advanced>
                </div>
                <div class="col-xs-8">
                    <search-result  [search]="searchingPost"></search-result>
                </div>
            </div>
        </div>
    </div>
        
 `
,styles:[`

`]
})
export class SearchMain {
    searchingPost:VOSearch = new VOSearch({});

    constructor(route:ActivatedRoute,private postsService:SearchService){
        route.params.subscribe(
            params => {
                if('pattern' in params && params['pattern'] && params['pattern'] !="") {
                    this.searchingPost = new VOSearch({pattern:params['pattern']});
                    // this.searchingPost.pattern = params['pattern'];
                    console.log('pattern main', this.searchingPost);
                }
            }
        );
    }

    onSearch(search:VOSearch){
        this.searchingPost = search;
        // console.log('this.searchingPost', this.searchingPost);
    }
}
