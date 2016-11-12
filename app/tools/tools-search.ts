/**
 * Created by Vlad on 9/6/2016.
 */
import {Component} from "@angular/core";
@Component({
  selector:'tools-search'
  ,template:`
<div>
    <form class="form-inline">
      <div class="form-group">
        <a class="fa fa-search" (click)="onClick()"></a>
        <!--<label for="searchInput"><span class="fa fa-search"></span></label>-->
        <input type="text" class="form-control" id="searchInput" placeholder="search for services">
      </div>
      <a class="btn btn-secondary" [routerLink]="['/search']"  routerLinkActive="active">advanced</a>
      <!--<button type="submit" class="btn btn-primary">advanced</button>-->
    </form>
</div>
`
})
export class ToolsSearch{
    onClick(){}
}
