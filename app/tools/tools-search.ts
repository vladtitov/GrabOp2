/**
 * Created by Vlad on 9/6/2016.
 */
import {Component} from "@angular/core";
import {VOSearch} from "../models/vos";
import {Router} from "@angular/router";
@Component({
  selector:'tools-search'
  ,template:`
<div>
    <form class="form-inline" #f="ngForm" autocomplete="off" novalidate>
      <div class="form-group">
        <a class="fa fa-search" (click)="onSearch()"></a>
        <!--<label for="searchInput"><span class="fa fa-search"></span></label>-->
        <input [(ngModel)]="search.pattern" (keyup.enter)="onSearch()" name="pattern" type="text" class="form-control" id="searchInput" placeholder="search for services">
      </div>
      <a class="btn btn-secondary" [routerLink]="['/search']"  routerLinkActive="active">advanced</a>
      <!--<button type="submit" class="btn btn-primary">advanced</button>-->
    </form>
</div>
`
})
export class ToolsSearch{
    search:VOSearch = new VOSearch({});

    constructor(private router:Router){ }

    onSearch(){
        this.router.navigate(['search',this.search.pattern]);
    }
}
