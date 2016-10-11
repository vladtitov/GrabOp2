/**
 * Created by Vlad on 9/16/2016.
 */
import { NgModule }       from '@angular/core';
import {FormsModule, ReactiveFormsModule}    from '@angular/forms';
import { CommonModule }   from '@angular/common';
import {Route, RouterModule} from "@angular/router";
import {ProfileMain} from "./profile-main";
import {ProfileHeader} from "./profile-header";
import {ProfileSkills} from "./profile-skils";
import {ProfileConnections} from "./profile-connections";
import {ProfileTitle} from "./profile-title";
import {ProfileMedia} from "./profile-media";
import {SharedModule} from "../shared/shared-module";
import JoinUsModule from "../join-us/join-us-module";
import {JoinUsMain} from "../join-us/join-us-main";


const myRoutes = [
  { path: '' ,component: ProfileMain }

];


@NgModule({
  imports: [
    RouterModule.forChild(myRoutes)
    ,SharedModule
   // ,JoinUsModule
  ],
  declarations: [
    ProfileMain
    ,ProfileHeader
    ,ProfileSkills
    ,ProfileConnections
    ,ProfileTitle
    ,ProfileMedia

  ],

  providers: [

  ]
})
export default class ProfileModule {}
