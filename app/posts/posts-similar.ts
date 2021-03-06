/**
 * Created by Vlad on 9/10/2016.
 */
import {Component, OnInit, Input} from "@angular/core";
import {VOService} from "../models/vos";


@Component({
  selector:'posts-similar',
  template:`
<div class="posts-card">     
      <div class="card-{{size}}">
                <div class="thumb-{{size}}" [class.selected]="my_item.selected">
                    <div class="image-container-{{size}}">
                            <img class="image-{{size}}" src="{{my_item.image}}" />
                    </div>
                    <div class="myid"><span>{{my_item.id}}</span></div>
                    <div class="info pos-bottom">
                        <div class="deviceText-{{size}}"><span>{{my_item.title}}</span></div>
                    </div>
                </div>
            </div>

</div>
`
})
export class PostsSimilar implements OnInit{
  @Input() my_item:VOService;
  size:number= 256;
  constructor(){

  }

  ngOnInit():void{

  }

  loadServices():void{

  }

}
