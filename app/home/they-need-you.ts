/**
 * Created by Vlad on 9/6/2016.
 */
/**
 * Created by Vlad on 9/6/2016.
 */
import {Component, OnInit} from "@angular/core";
import {VOPost} from "../models/vos";
import {PostEditService} from "../post-edit/posts-edit-service";
@Component({
  selector:'they-need-you'
  ,template:`
<div>
        <div class="row">
            <div class="col-md-12">
                <h5>They need You</h5>
                <posts-list [posts]="need"></posts-list>
            </div>
        </div>            
</div>
`
})
export class TheyNeedYou implements OnInit{
    need:VOPost[];

    constructor(private postsService:PostEditService){

    }

    ngOnInit(){
        this.postsService.getPosts().subscribe(
            (posts:VOPost[])=>{
                this.need = posts.filter(item=>{ return item.type=='need'});
                console.log(posts);
            });
    }
}
