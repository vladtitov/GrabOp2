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
        <div class="container">
            <div class="card-block">
                <div class="row">
                    <div class="col-md-8">
                        <a  [routerLink]="['/']" routerLinkActive="active" class="btn fa fa-close float-sm-right"></a>
                        <h4 class="text-sm-center"><strong>Update your Service and Alliance</strong><span>{{model.type}}</span></h4>
                    </div>
                </div>
                
                <div class="row">
                    <div class="col-sm-2">
                        <nav class="nav nav-pills nav-stacked">
                            <a routerLink="../basic" routerLinkActive="menu-active" class="nav-link">BASICS</a>
                            <a routerLink="../style" routerLinkActive="menu-active" class="nav-link">BUSINESS STYLE</a>
                            <a routerLink="../assets" routerLinkActive="menu-active" class="nav-link">PHOTOS / VIDEO</a>
                            <a routerLink="../alliance" routerLinkActive="menu-active" class="nav-link">ALLIANCE</a>
                        </nav>
                    </div>
                   <div>{{model.title}}</div>
                   <div class="col-sm-6 bl">
                      <div *ngIf="myStep=='basic'" class="mytab row">
                          <post-edit-basic [model]="model" class="col-sm-10 offset-sm-2"></post-edit-basic>
                      </div>           
                      <div *ngIf="myStep=='style'" class="mytab row">
                            <post-edit-style [model]="model" class="col-sm-10 offset-sm-2"></post-edit-style>
                      </div>
                      <div *ngIf="myStep=='assets'" class="mytab row">
                           <post-edit-media [model]="model" class="col-sm-10 offset-sm-1"></post-edit-media>
                      </div>
                      <div *ngIf="myStep=='alliance'" class="mytab">
                           <post-edit-alliance [model]="model"></post-edit-alliance>
                      </div>
                      <button class="btn btn-primary btn-lg float-sm-right" (click)="onSaveClick()" >update</button>
                  </div>
                </div>
            </div>
        </div>
</div>
`,
    styles:[`
        .bl{
            border-left: solid 2px #c1c1c1;
        }
    `]

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
        if(this.model.id){
            this.postEditService.updatePost(this.model).subscribe(
                res=>{
                    console.log('updatePost',res);
                }
            );
        } else {
            this.postEditService.insertPost(this.model).subscribe(
                res=>{
                    console.log('insertPost',res);
                }
            );
        }
    }

  ngOnChanges(obj:any):void{

    // console.log(obj)
    // if(obj.my_service_id && this.my_service_id !== obj.my_service_id)  this.loadService();

  }

  ngOnInit():void{

    this.aroute.params.subscribe(params=>{
      console.log(params);
      this.myStep =  params['step'] || 'basic';
      let id = params['id'];
        console.log('params', params);
        if( params['type']){
            this.model = new VOPost({type:params['type']});
        } else {
            this.loadPost(id);
        }

      // if(this.model_id !==id) this.loadPost(id);
    });
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
