import {Component, OnInit} from "@angular/core";
import {document} from "@angular/platform-browser/src/facade/browser";
@Component({
  selector:'tools-post'
  ,template:`
<div>
    <a class="fa fa-plus-circle btn" (click)="onClick()" ></a>     
                
      <div *ngIf="isVisible" class="drop-holder">
          <div class="drop-container">
            <div class="drop-items">
                <a  [routerLink]="['/post-edit/basic',{type:'need'}]"   routerLinkActive="active">Post need</a>
                <a  [routerLink]="['/post-edit/basic',{type:'offer'}]"   routerLinkActive="active">Post Offer</a> 
            </div>               
          </div>
      </div>  
              
             
</div>
`
  ,host: {
    '(document:click)': 'onDocClick($event)',
  }
})
export class ToolsPost implements OnInit{

  isVisible:boolean;

  ngOnInit():void{

  }
  onDocClick(evt:MouseEvent):void{
    if(this.isVisible) this.isVisible= false;
  }
  onClick(evt):void{

   if(!this.isVisible) setTimeout(()=>{this.isVisible = true},50);



  }
}

