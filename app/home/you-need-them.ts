/**
 * Created by Vlad on 9/6/2016.
 */
/**
 * Created by Vlad on 9/6/2016.
 */
import {Component, OnInit} from "@angular/core";
import {VOPost, VOUserExt} from "../models/vos";
import {PostEditService} from "../post-edit/posts-edit-service";
import {UserService} from "../myservices/user-service";
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
    user:VOUserExt  = new VOUserExt({});
    offer:VOPost[];

    constructor(private postsService:PostEditService, private userService:UserService){  }

    ngOnInit(){
        this.userService.user$.subscribe(
            user =>{
                this.user = user;
            });
        this.postsService.getPosts().subscribe(
            (posts:VOPost[])=>{
                this.offer = posts.filter(item=>{ return item.type=='offer'});
                this.user.offers = this.offer.length;
            });
    }
}
