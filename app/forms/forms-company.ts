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
                <div class="col-sm-1 offset-sm-3 text-sm-right">
                    <label>Job Title</label>
                </div>
                <div class="col-sm-8 text-sm-left">
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
                <div class="col-sm-1 offset-sm-3 text-sm-right">
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
              <div class="col-sm-9 offset-sm-3">
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
            <div class="col-sm-2 offset-sm-3">
                <div class="card">
                  <img class="card-img-top s70x70" [src]="person.resume?'img/docx.png':''">
                  <p class="card-text" *ngIf="person.resume">resume</p>
                </div>
            </div>
            <div class="col-sm-7 text-sm-left">
                <label>upload resume</label>
                <input type="file" nane="file" (change)="onAddResumeChange($event)" />
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-2 offset-sm-3">
                  <p>Skills</p>
            </div>
            <div class="col-sm-7 text-sm-left">
                <div *ngFor="let skill of person.skillset; let i=index; trackBy:trackBySkills">
                    <a class="fa fa-minus-circle btn" (click)="onDeleteClick(i)"></a>
                    <!--<input  [(ngModel)]="skill" name="skill"/> cannot assign to a reference or variable-->
                    <input  [(ngModel)]="person.skillset[i]" [ngModelOptions]="{standalone: true}"/>
                </div>
                <a class="fa fa-plus-circle btn" (click)="onAddClick()"></a>
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
  constructor(private fb:FormBuilder, private uploadService:UploadService){  }

  ngOnInit():void{
      // if(!this.person.skillset){
      //     this.person.skillset = [''];
      // }
      // console.log('this.person.skillset', this.person.skillset);
  }

  onAddResumeChange(evt):void {
      var files: FileList = evt.target.files;
      if (files.length) {
          var form: FormData = new FormData();
          var file: File = files[0];
          form.append('file', file);
          if (files[0].size < 2000000) {
              this.uploadService.upload(form, 'user-resume', this.person.id).done(res=> {
                  console.log(res);
                  if (res.success == 'success') {
                      this.person.resume = res.result;
                  }

              })
          }
          else alert('File should be less then 2 Megabite');
      }
  }

    trackBySkills(index: number, obj:any): any{
        return index;
    }

    onAddClick(){
        this.person.skillset ? this.person.skillset.push('') : this.person.skillset = [''];
    }

    onDeleteClick(index:number){
        // console.log('index', index);
        // index == 0 ? this.person.skillset.shift(): this.person.skillset.splice(index,1);
        // if(index==0) this.person.skillset.shift();
        this.person.skillset.splice(index,1);
    }



}
