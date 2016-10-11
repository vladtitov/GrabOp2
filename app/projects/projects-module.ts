
import { NgModule }       from '@angular/core';
import {FormsModule, ReactiveFormsModule}    from '@angular/forms';
import { CommonModule }   from '@angular/common';
import {Route, RouterModule} from "@angular/router";

import {SharedModule} from "../shared/shared-module";
import {ProjectsMain} from "./projects-main";


const myRoutes = [
  { path: '' ,component: ProjectsMain,redirectTo:'/projects/invitations', pathMatch: 'full' },
  { path: ':id' ,component: ProjectsMain }

];


@NgModule({
  imports: [
    RouterModule.forChild(myRoutes)
    ,SharedModule
  ],
  declarations: [
    ProjectsMain

  ],

  providers: [

  ]
})
export default class ProjectsModule {}

