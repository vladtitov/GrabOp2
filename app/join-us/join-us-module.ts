/**
 * Created by Vlad on 9/5/2016.
 */
import { NgModule }       from '@angular/core';
import {FormsModule, ReactiveFormsModule}    from '@angular/forms';
import { CommonModule }   from '@angular/common';

import {JoinUsUsername} from "./join-us-username";
import {JoinUsCompany} from "./join-us-company";
import {JoinUsMain} from "./join-us-main";
import {EditAssets} from "../forms/forms-assets";
import {JoinUsPersonal} from "./join-personal";
import {Route, RouterModule} from "@angular/router";
import {JoinUsAssets} from "./join-us-assets";
import AccountEditModule from "../forms/account-edit-module";
import {JoinUsService} from "./login-service";


const joinusRoutes = [
  {
    path: 'join-us', component: JoinUsMain,outlet:'important'
    //path: 'join-us', component: JoinUsMain
    , children: [
        {path: '', component: JoinUsMain,redirectTo:'username'}
        ,{path: 'username', component: JoinUsUsername}
        ,{path: 'company', component: JoinUsCompany}
        ,{path: 'personal', component: JoinUsPersonal}
        ,{path: 'assets', component: JoinUsAssets}
  ]
  }
];


@NgModule({
  exports:[
    JoinUsMain
  ]
  ,imports: [
    CommonModule
    ,FormsModule
    ,ReactiveFormsModule
    ,AccountEditModule
    ,RouterModule.forChild(joinusRoutes)
  ],
  declarations: [
    JoinUsMain,
    JoinUsUsername,
    JoinUsCompany,
    JoinUsAssets,
    JoinUsPersonal
  ],

  providers: [
    JoinUsService
  ]
})
export default class JoinUsModule {}
