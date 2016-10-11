/**
 * Created by Vlad on 9/17/2016.
 */
import { NgModule }       from '@angular/core';
import {FormsModule, ReactiveFormsModule}    from '@angular/forms';
import { CommonModule }   from '@angular/common';
import {Route, RouterModule} from "@angular/router";

import {SharedModule} from "../shared/shared-module";
import {ConnectionsMain} from "./connections-main";


const myRoutes = [
  { path: '' ,component: ConnectionsMain },

];


@NgModule({
  imports: [
    RouterModule.forChild(myRoutes)
    ,SharedModule
  ],
  declarations: [
    ConnectionsMain

  ],

  providers: [

  ]
})
export default class ConnectionsModule {}
