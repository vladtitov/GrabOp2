/**
 * Created by Vlad on 9/10/2016.
 */
///<reference path="../tsds/jquery.d.ts"/>
import {Component, OnInit, Input, OnChanges, SimpleChange, Output, EventEmitter} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {VOSettings, VOService, VOPost, VOImage} from "../models/vos";
import {PostEditService} from "./posts-edit-service";
import {UploadService} from "../myservices/upload-service";
@Component({
  selector:'post-edit-media',
  template:`
<div class="post-edit">
     <h5 class="text-md-center">Media</h5>  
         
           <div >
              <h5>Photos</h5>
              <div>
                <div *ngFor="let image of images">
                    <div (click)="onImageClick(image)" [class.selected]="image.selected">
                      <img  class="image" src="{{image.src}}"/>                    
                    </div>
                
                </div>
                <form #imageForm enctype="multipart/form-data">
                    <input type="file" name="file" (change)="onImageUploadChange($event)" />
                    <button (click)="onDeleteClick()">Delete</button>
                </form>
              </div>
           
           </div>
           <div>
              <h5>Videos</h5>
                  <div>
                  
                  </div>           
          </div>
          <div>
            <h5>Documents</h5>
              <div>
              
              </div>
          
          </div>
           <div class="debug">{{ model | json }}</div>

</div>
`
})
export class PostEditMedia implements OnInit, OnChanges{

  @Input() model:VOPost;
  images:VOImage[]
  @Input() model_id:number;
  imageForm;
  currentImage:VOImage;
  @Output() selected$:EventEmitter<VOImage> = new EventEmitter<VOImage>();
  private selected:VOImage;

  constructor(private uploadSerevice:UploadService,private postEditService:PostEditService){
  }

  ngOnChanges(obj:any):void{

    console.log(obj);
    if(obj.model && obj.model.currentValue.id){
      this.loadAttachments(obj.model.currentValue.id);
    }

  }
  onImageClick(image:VOImage):void{
    if(this.selected)this.selected.selected= false;
    image.selected= true;
    this.selected = image;
    this.selected$.emit(this.selected)
  }

  onDeleteClick():void{
    if(this.selected){
      if(confirm('You want to delete?')){
        this.postEditService.deleteAttachment(this.model.id,this.selected.id)
      }
    }
  }

  saveAttachment(vo:VOImage):void{

    this.postEditService.saveAttachment(vo,this.model.id).then(
      res=>{
        if(res.insertId){
          this.currentImage.id = res.insertId;
          if(!this.images) this.images=[];
          this.images.push(this.currentImage);
        }
        this.currentImage.dirty = false;

        console.log(res);
      }
    )
  }


  onImageUploadChange($evt):void{

    var files:FileList = $evt.target.files;
    if(files.length){
      var form:FormData = new FormData();
      var file:File = files[0];
      form.append('file',file);
      if(files[0].size<2000000){
        this.uploadSerevice.upload(form,'post_attachments',this.model.id).done(res=>{
          console.log(res);
          if(res.success=='success'){
            var img:VOImage = new VOImage({src:res.result,type:'image',posts_id:this.model.id,dirty:true});
            this.currentImage = img;
            this.saveAttachment(img);
            this.model.attachments = this.images.length;
          }

        })
      }
      else alert('File should be less then 2 Megabite');
    }
  }

  loadAttachments(id:number):void{
    this.postEditService.getAttachments(this.model.id).then(
      res=>{
        this.images = res;
        console.log(res);
      });
  }
  ngOnInit():void{
    /*console.log(this.model);
      if(this.model.attachments){
        this.loadAttachments(this.model.id);
        //this.images = this.model.attachments.filter((item:VOImage)=>{return item.type=='image'})
      }
      else this.images=[];*/

  }



}
