
import {Component, NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule}    from '@angular/forms';
import {Route, RouterModule} from "@angular/router";

import {MySettingsMain} from "./mysettings-main";
import {Notifications} from "./notifications";
import {ChangePass} from "./change-pass";
import {PrivacySettings} from "./privacy-settings";
import {UpdateAccount} from "./update-account";

import {SharedModule} from "../shared/shared-module";

import {UserService} from "../myservices/user-service";
import {JoinUsService} from "../join-us/login-service";


const myRoutes = [
  { path: '' ,component: MySettingsMain }
];

@NgModule({
  imports:[
    CommonModule
    ,FormsModule
    ,ReactiveFormsModule
    ,RouterModule.forChild(myRoutes)
    ,SharedModule
  ]
  ,declarations:[
      MySettingsMain
    ,Notifications
    ,ChangePass
    ,PrivacySettings
    ,UpdateAccount
  ]
  ,providers:[
    UserService
    ,JoinUsService
  ]
})
export default class MySettingsModule{

}
