import { NgModule }       from '@angular/core';
import {FormsModule, ReactiveFormsModule}    from '@angular/forms';
import { CommonModule }   from '@angular/common';
import {Route, RouterModule} from "@angular/router";

import {SharedModule} from "../shared/shared-module";
import {OpportunitiesMain} from "./opportunities-main";



const myRoutes = [
  { path: ':id' ,component: OpportunitiesMain},
  { path: '' ,component: OpportunitiesMain,pathMatch: 'full',redirectTo:'/opportunities/pending'}
];


@NgModule({
  imports: [
    RouterModule.forChild(myRoutes)
    ,SharedModule
  ],
  declarations: [
    OpportunitiesMain

  ],

  providers: [

  ]
})
export default class OpportunitiesModule {}
