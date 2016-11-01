/**
 * Created by Vlad on 9/5/2016.
 */
import {Component, OnInit, Input} from "@angular/core";
//import {UserService} from "../myservices/person-service";
import {VOUserExt, VOImage} from "../models/vos";
import {UploadService} from "../myservices/upload-service";
@Component({
  selector:'edit-assets'
  ,template:`
<div>
          <!--<h2>Edit Assets</h2> -->
          <div class="form-group row">
            <div class="col-sm-2 offset-sm-2">
              <img class="s100x100" src="{{model?model.profile_pic:''}}" />
            </div>
            <div class="col-sm-8 text-sm-left">
                <label>add photo</label>
                <input type="file" nane="file" (change)="onAddPhotoChange($event)" />
            </div>
          </div>
           <div class="form-group row">
            <div class="col-sm-2 offset-sm-2">
              <img class="s100x100" src="{{model?model.video:''}}" />
            </div>
            <div class="col-sm-8 text-sm-left">
                <button>add video</button>
            </div>
          </div>
           <div class="form-group row">
            <div class="col-sm-2 offset-sm-2">
              <img  class="s100x100" src="{{model?model.background_pic:''}}" />
            </div>
            <div class="col-sm-8 text-sm-left ">
                 <label>background image</label>
                 <input type="file" nane="file" (change)="onAddBackgroundChange($event)" />
            </div>
          </div>
 <div class="debug">{{ model | json }}  </div>  
</div>
`

})
export  class EditAssets implements OnInit{
  @Input() model:VOUserExt;

  constructor( private uploadService:UploadService){

  }

  ngOnInit():void{

   // this.accoutService.myAccount$.subscribe(person =>this.person = person)
  }

  onAddPhotoChange(evt):void{
    var files:FileList = evt.target.files;
    if(files.length){
      var form:FormData = new FormData();
      var file:File = files[0];
      form.append('file',file);
      if(files[0].size<2000000){
        this.uploadService.upload(form,'user-phote',this.model.id).done(res=>{
          console.log(res);
          if(res.success=='success'){

            this.model.profile_pic =res.result;
          }

        })
      }
      else alert('File should be less then 2 Megabite');
    }
  }
  onAddBackgroundChange(evt):void{
    var files:FileList = evt.target.files;
    if(files.length){
      var form:FormData = new FormData();
      var file:File = files[0];
      form.append('file',file);
      if(files[0].size<2000000){
        this.uploadService.upload(form,'user-background',this.model.id).done(res=>{
          console.log(res);
          if(res.success=='success'){
            this.model.background_pic =res.result;
          }

        })
      }
      else alert('File should be less then 2 Megabite');
    }
  }


}
