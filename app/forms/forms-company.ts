/**
 * Created by Vlad on 9/18/2016.
 */
import {Component, OnInit, Input} from "@angular/core";
//import {UserService} from "../myservices/person-service";
import {VOUserExt, VOUser} from "../models/vos";
import {FormGroup, FormBuilder} from "@angular/forms";
import {UploadService} from "../myservices/upload-service";
@Component({
  selector:'forms-company'
  ,template:`
<form #f="ngForm"  autocomplete="off" novalidate>
          <fieldset>          
              <div class="form-group row">
                <div class="col-sm-1 offset-sm-4 text-sm-right">
                    <label>Job Title</label>
                </div>
                <div class="col-sm-7 text-sm-left">
                    <input  [(ngModel)]="person.jobtitle" name="jobtitle" />
                </div>
              </div>
              
            <div class="form-group row">
                <!--<div class="col-sm-9 offset-sm-3 ">-->
                    <!--<div class="form-check">-->
                        <!--<label class="form-check-label">-->
                            <!--<input class="form-check-input" [(ngModel)]="person.occupation" type="radio" name="occupation" value="company" checked>-->
                            <!--Company <input [(ngModel)]="person.company" name="company" />-->
                        <!--</label>    -->
                    <!--</div>-->
                <!--</div>-->
                <div class="col-sm-1 offset-sm-4 text-sm-right">
                    <label>Company</label>
                </div>
                <div class="col-sm-4 text-sm-left">
                    <div class="input-group">
                      <span class="input-group-addon">
                        <input  [(ngModel)]="person.occupation" type="radio" name="occupation" value="company" checked>
                        <!--<input type="radio" aria-label="Radio button for following text input">-->
                      </span>
                      <input [(ngModel)]="person.company" type="text" class="form-control" name="company" />
                      <!--<input type="text" class="form-control" aria-label="Text input with radio button">-->
                    </div>
                </div>
                <!--<div class="col-sm-1 text-sm-left">Company</div>-->
                <!--<div class="col-sm-7 text-sm-left">-->
                    <!--<input [(ngModel)]="person.company" name="company" />             -->
                <!--</div>-->
            </div>
            <div class="form-group row text-sm-left">
              <div class="col-sm-8 offset-sm-4">
                <div class="form-check">
                  <label class="form-check-label">
                    <input [(ngModel)]="person.occupation" type="radio" name="occupation" value="selfemployed">
                    Self Employed
                  </label>
                </div>
                <div class="form-check">
                  <label class="form-check-label">
                    <input  [(ngModel)]="person.occupation" type="radio" name="occupation" value="seeling">
                    Seeking an Opportunity
                  </label>
                </div>
                <div class="form-check">
                  <label class="form-check-label">
                   <input  [(ngModel)]="person.occupation" type="radio" name="occupation" value="other">
                   Other
                  </label>
                </div>
                  <!--<br> <input [(ngModel)]="person.occupation" type="radio" name="occupation" value="selfemployed"> Self Employed-->
                  <!--<br><input  [(ngModel)]="person.occupation" type="radio" name="occupation" value="seeling"> Seeking an Opportunity-->
                 <!--<br><input  [(ngModel)]="person.occupation" type="radio" name="occupation" value="other"> Other-->
              </div>    
            </div>          
          </fieldset>
          <div class="form-group row">
            <div class="col-sm-2 offset-sm-2">
              <img class="s100x100" src="{{person?person.resume:''}}" />
            </div>
            <div class="col-sm-8 text-sm-left">
                <label>add photo</label>
                <input type="file" nane="file" (change)="onAddResumeChange($event)" />
            </div>
          </div>
</form> 
    <div class="debug">{{ person | json }}</div>
`
})
export  class FormsCompany implements OnInit{
 // myGroup:FormGroup;
  myForm:FormGroup;
  @Input() person:VOUserExt;
  constructor(private fb:FormBuilder, private uploadService:UploadService){


  }

  ngOnInit():void{

  }

  onAddResumeChange(evt):void{
      var files:FileList = evt.target.files;
      if(files.length){
          var form:FormData = new FormData();
          var file:File = files[0];
          form.append('file',file);
          if(files[0].size<2000000){
              this.uploadService.upload(form,'user-phote',this.person.id).done(res=>{
                  console.log(res);
                  if(res.success=='success'){

                      this.person.profile_pic =res.result;
                  }

              })
          }
          else alert('File should be less then 2 Megabite');
      }

}
