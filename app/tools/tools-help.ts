/**
 * Created by Vlad on 9/6/2016.
 */
import {Component} from "@angular/core";
@Component({
  selector:'tools-help'
  ,template:`
<div>
        <a class="btn" [routerLink]="['/help']">Help</a>
</div>
`
})
export class ToolsHelp{

}
