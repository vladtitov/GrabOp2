/**
 * Created by Vlad on 9/10/2016.
 */
import {Component, OnInit, Input} from "@angular/core";
import {VOService} from "../models/vos";


@Component({
  selector:'posts-style',
  template:`
<div> 
    <h5>Business style of interest</h5>
      <div >
                
     </div>
</div>
`
})
export class PostsStyle implements OnInit{
  @Input() my_item:VOService;
  size:number= 256;
  constructor(){

  }

  ngOnInit():void{

  }

  loadServices():void{

  }

}
