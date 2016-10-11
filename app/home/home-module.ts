/**
 * Created by Vlad on 9/6/2016.
 */
import {Component, NgModule} from "@angular/core";
import {Route, RouterModule} from "@angular/router";

import {CardYours} from "./card-yours";
import {CommentsHome} from "./coments-home";
import {HomeHeader} from "./home-header";
import {HomeStatistics} from "./home-statistics";
import {ProfileComplete} from "./profile-complete";
import {TheyNeedYou} from "./they-need-you";
import {YouNeedThem} from "./you-need-them";
import {HomeMain} from "./home-main";
import {SharedModule} from "../shared/shared-module";


const myRoutes = [
  { path: '' ,component: HomeMain },

];

@NgModule({
  imports:[
    RouterModule.forChild(myRoutes)
    ,SharedModule

  ]
  ,declarations:[
    HomeMain
    ,CardYours
    ,CommentsHome
    ,HomeHeader
    ,HomeStatistics
    ,ProfileComplete
    ,TheyNeedYou
    ,YouNeedThem
  ]
  ,providers:[

  ]
})
export default class HomeModule{

}
