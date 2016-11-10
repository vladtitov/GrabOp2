/**
 * Created by Vlad on 9/5/2016.
 */
import {Component} from "@angular/core";
import {VOUserExt} from "../models/vos";
import {UserService} from "../myservices/user-service";
@Component({
  template:`
        <h2>Profile Edit</h2>
        <div class="card text-xs-center">
            <a [routerLink]="['/']" routerLinkActive="active" class="btn fa fa-close pull-right"></a>
          <div class="card-header">
            <ul class="nav nav-tabs card-header-tabs float-xs-left">
              <li class="nav-item">
                <a class="nav-link" routerLink="/profile-edit/personal" routerLinkActive="active">Basics</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" routerLink="/profile-edit/company" routerLinkActive="active">Professional</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" routerLink="/profile-edit/assets" routerLinkActive="active">Photo/Video</a>
              </li>
            </ul>
          </div>
          <div class="card-block">
          <div *ngIf="myMsg">{{myMsg}}</div>
            <!--<h4 class="card-title">Special title treatment</h4>-->
            <!--<p class="card-text">With supporting text below as a natural lead-in to additional content.</p>-->
            <!--<a href="#" class="btn btn-primary">update</a>-->
          <!--</div>-->
          <router-outlet></router-outlet>
          <button class="btn btn-primary" (click)="onSubmitClick()">update</button>
        </div>
      </div>
 `

})
export class ProfileEditMain{

    private user:VOUserExt;
    myMsg:string;
    constructor(private userService:UserService){
        // this.person = joinusService.person;
    }

    ngOnInit():void{
        this.userService.user$.subscribe(
            user=>this.user = user
        )
    }

    onSubmitClick():void{
        this.userService.saveUser().then(
            res=>{
                if(res.success){
                    this.myMsg='data Saved'
                }else {
                    this.myMsg = res.message;
                }
                setTimeout(()=>{this.myMsg=''},10000);
                this.userService.getUser();
            }
        )
    }

}
