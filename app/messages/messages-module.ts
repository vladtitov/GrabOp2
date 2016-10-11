import { NgModule }       from '@angular/core';
import {FormsModule, ReactiveFormsModule}    from '@angular/forms';
import { CommonModule }   from '@angular/common';
import {Route, RouterModule} from "@angular/router";

import {SharedModule} from "../shared/shared-module";
import {MessagesMain} from "./messages-main";


const myRoutes = [
  { path: ':id' ,component: MessagesMain},
  { path: '' ,component: MessagesMain,redirectTo:'/messages/pending'}
];


@NgModule({
  imports: [
    RouterModule.forChild(myRoutes)
    ,SharedModule
  ],
  declarations: [
    MessagesMain

  ],

  providers: [

  ]
})
export default class MessagesModule {}
