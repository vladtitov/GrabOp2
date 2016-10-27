/**
 * Created by Vlad on 9/9/2016.
 */
import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {VOSettings, VOUserExt, VOPost} from "../models/vos";
import {UserService} from "../myservices/user-service";
import {PostEditService} from "../post-edit/posts-edit-service";



@Component({
  template:`
<div class="profile-main">
      <h1>Profile Main</h1>
      <profile-header [user]="user"></profile-header>
      <profile-title  [user]="user"></profile-title>
      <profile-connections [user]="user" ></profile-connections>
      <profile-media  [user]="user" ></profile-media>
      <profile-skills  [user]="user"></profile-skills>
           
           <button class="btn btn-primary" (click)="onPostEditClick()">Edit post</button>
       <div class="row">
            <div class="col-md-12">
                <h5>Need</h5>
                <posts-list [posts]="need" (selected)="onPostSelect($event)"></posts-list>
            </div>
       </div>
       <div class="row">
            <div class="col-md-12">
                <h5>Offer</h5>
                <posts-list [posts]="offer" (selected)="onPostSelect($event)" ></posts-list>
            </div>
       </div>

</div>
`
})
export class ProfileMain implements OnInit{

  currentService:any;
  user:VOUserExt;
  myServices:any[];
  currentServiceId:number;
  listtype1:string;
  listtype2:string;
  need:VOPost[];
  offer:VOPost[];


  selectedPost:VOPost;

  constructor(private aroute:ActivatedRoute, private router:Router, private userService:UserService, private postsService:PostEditService ){

  }

  onPostEditClick():void{
    if(this.selectedPost){
      this.router.navigate(['post-edit/'+this.selectedPost.id+'/basic']);
    }
  }
  onPostSelect(item:VOPost){
    if(this.selectedPost)this.selectedPost.selected= false;
    item.selected= true;
    this.selectedPost=item;
  }
  ngOnInit():void{
    this.userService.user$.subscribe(
      user=>this.user = user
    );
    this.aroute.params.subscribe(params=>{
      let id:number = +params['id'];
      if(isNaN(id)) return;
     // this.currentServiceId = id;
     /* this.myService.myAccount$.subscribe((profile)=>{
        console.log(profile);
      })*/

    })
    this.loadServices();
  }

  loadServices():void{
    console.log('load services');

  this.postsService.getPosts().subscribe(
    (posts:VOPost[])=>{

      this.need = posts.filter(item=>{ return item.type=='need'});
      this.offer = posts.filter(item=>{ return item.type=='offer'});
        console.log(posts);
      });
  }

}
