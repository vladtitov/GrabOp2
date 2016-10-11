/**
 * Created by Vlad on 9/16/2016.
 */
import { NgModule }       from '@angular/core';
import {FormsModule, ReactiveFormsModule}    from '@angular/forms';
import { CommonModule }   from '@angular/common';
import {Route, RouterModule} from "@angular/router";
import {SharedModule} from "../shared/shared-module";
import {PostEditMain} from "./post-edit-main";
import {PostEditMedia} from "./post-edit-media";
import {PostEditAlliance} from "./post-edit-alliance";
import {PostEditBasic} from "./post-edit-basic";
import {PostEditTools} from "./post-edit-tools";
import {PostEditStyle} from "./post-edit-style";

const posteditRoutes = [
  { path: ':step' ,component: PostEditMain }
  ,{ path: ':id/:step' ,component: PostEditMain }
  ,{ path: '' ,component: PostEditMain, redirectTo:'basic' }
];


@NgModule({
  imports: [
    CommonModule
    ,FormsModule
    ,ReactiveFormsModule
    ,SharedModule
    ,RouterModule.forChild(posteditRoutes)
  ],
  declarations: [
    PostEditMain
    ,PostEditMedia
    ,PostEditAlliance
    ,PostEditBasic
    ,PostEditTools
    ,PostEditStyle
  ]
 // ,exports:[PostEditMain]
  ,providers: [

  ]
})
export class PostEditModule {}
