/**
 * Created by Vlad on 9/17/2016.
 */
import { NgModule }       from '@angular/core';
import {FormsModule, ReactiveFormsModule}    from '@angular/forms';
import { CommonModule }   from '@angular/common';
import {Route, RouterModule} from "@angular/router";

import {SharedModule} from "../shared/shared-module";
import {AlliancesMain} from "./alliances-main";


const myRoutes = [
  { path: '' ,component: AlliancesMain,redirectTo:'/alliances/sent', pathMatch: 'full' },
  { path: ':id' ,component: AlliancesMain }
];


@NgModule({
  imports: [
    RouterModule.forChild(myRoutes)
    ,SharedModule
  ],
  declarations: [
    AlliancesMain

  ],

  providers: [

  ]
})
export default class AlliancesModule {}
