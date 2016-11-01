/**
 * Created by Vlad on 9/16/2016.
 */
import { NgModule }       from '@angular/core';
import {FormsModule, ReactiveFormsModule}    from '@angular/forms';
import { CommonModule }   from '@angular/common';
import {Route, RouterModule} from "@angular/router";
import {ProfileEditMain} from "./profile-edit-main";
import {SharedModule} from "../shared/shared-module";
import AccountEditModule from "../forms/account-edit-module";
import {ProfileEditUsername} from "./ProfileEditUsername";
import {ProfileEditCompany} from "./profile-edit-company";
import {ProfileEditPersonal} from "./profile-edit-personal";
import {ProfileEditAssets} from "./profile-edit-assets";
import {JoinUsService} from "../join-us/login-service";


const myRoutes = [
  { path: '' ,component: ProfileEditMain
    , children: [
    {path: '', component: ProfileEditMain,redirectTo:'personal'}
    ,{path: 'username', component: ProfileEditUsername}
    ,{path: 'company', component: ProfileEditCompany}
    ,{path: 'personal', component: ProfileEditPersonal}
    ,{path: 'assets', component: ProfileEditAssets}
  ]

  }

];


@NgModule({
  imports: [
    CommonModule
    ,FormsModule
    ,ReactiveFormsModule
    ,RouterModule.forChild(myRoutes)
    ,SharedModule
    ,AccountEditModule
  ],
  declarations: [
    ProfileEditMain
    ,ProfileEditUsername
    ,ProfileEditCompany
    ,ProfileEditPersonal
    ,ProfileEditAssets

  ],

  providers: [
    JoinUsService

  ]
})
export default class ProfileEditModule {}
