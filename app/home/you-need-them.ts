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
  selector:'you-need-them'
  ,template:`
<div >
        <div class="row">
            <div class="col-md-12">
                <h5>You need Them</h5>
                <posts-list [posts]="offer"></posts-list>
            </div>
        </div>
</div>
`
})
export class YouNeedThem implements OnInit{
    offer:VOPost[];

    constructor(private postsService:PostEditService){  }

    ngOnInit(){
        this.postsService.getPosts().subscribe(
            (posts:VOPost[])=>{
                this.offer = posts.filter(item=>{ return item.type=='offer'});
                console.log(posts);
            });
    }
}
