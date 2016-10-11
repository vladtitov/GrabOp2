/**
 * Created by Vlad on 9/10/2016.
 */
import {Component, OnInit, Input, OnChanges, SimpleChange} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {VOSettings, VOService, VOUserExt, VOPost} from "../models/vos";
import {PostEditService} from "./posts-edit-service";
import {UserService} from "../myservices/user-service";

@Component({
  selector:'post-edit-main',
  template:`
<div class="post-edit-main">
      <h2>Post Edit <span>{{model.type}}</span></h2> 
           <nav class="mynav">
              <a class="basic" routerLink="../basic" routerLinkActive="menu-active"  >BSIC</a>
              <a class="style" routerLink="../style" routerLinkActive="menu-active" >STYLE</a>  
              <a class="assets" routerLink="../assets" routerLinkActive="menu-active" >Pnoto/Video</a>  
              <a class="alliance" routerLink="../alliance" routerLinkActive="menu-active" >Alliance</a>
          </nav>     
      
           <div>{{model.title}}</div>
           <div>
              <div *ngIf="myStep=='basic'" class="mytab">
                  <post-edit-basic [model]="model" ></post-edit-basic>
              </div>           
              <div *ngIf="myStep=='style'" class="mytab">
               <post-edit-style [model]="model" ></post-edit-style>
              </div>
              <div *ngIf="myStep=='assets'" class="mytab">
                   <post-edit-media [model]="model"></post-edit-media>
              </div>
              <div *ngIf="myStep=='alliance'" class="mytab">
                   <post-edit-alliance [model]="model"></post-edit-alliance>
              </div>
              <button (click)="onSaveClick()" >SAVE</button>
          </div>   
                

</div>
`
})
export class PostEditMain implements OnInit, OnChanges{

  model:VOPost = new VOPost({});
  model_id:number = 20;

  myStep:string;

  postType:string;

  constructor(private postEditService:PostEditService, private aroute:ActivatedRoute, private accountService:UserService){


  }

  onSaveClick():void{
   // console.log(this.myServiceService);

    this.postEditService.savePost(this.model).subscribe(
      res=>{
        console.log(res)
      }
    )
  }

  ngOnChanges(obj:any):void{

    // console.log(obj)
    // if(obj.my_service_id && this.my_service_id !== obj.my_service_id)  this.loadService();

  }

  ngOnInit():void{

    this.aroute.params.subscribe(params=>{
      console.log(params)
      this.myStep =  params['step'] || 'basic';
      let id = +params['id'];

      if(this.model_id !==id) this.loadPost(id);
    })
  //this.loadService();
  }

  loadPost(id:number):void{
    console.log('load post '+id);
    this.model_id = id;
    this.postEditService.getPostById(id).subscribe(
      res=>{
        this.model = res;
        console.log(res);
      }
    )
  }

}
