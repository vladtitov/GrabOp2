/**
 * Created by Vlad on 9/9/2016.
 */
import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
@Component({
  template:`
<div class="container">
      <h1>Messages Main</h1>
      
      <div>
          <input type="search" placeholder="Search"/>      
      </div>
      <div>
      Messages list
        
      </div>
      <div>
            Message
      </div>

</div>
`
})
export class MessagesMain implements OnInit{

  topic:string;
  constructor(private router:Router,private aroute:ActivatedRoute){

  }

  ngOnInit():void{

    this.aroute.params.subscribe(
      params=>{
        console.log(params);
        this.topic =  params['id'];
      }
    )
  }
}
