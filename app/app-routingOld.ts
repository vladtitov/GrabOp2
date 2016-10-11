/**
 * Created by Vlad on 9/5/2016.
 */
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';
import {LandMain} from "./landing/land-main";
import {MyConnectionsMain} from "./connections/connections-main";
import {MyServicesMain} from "./myservices/myservice-main";
import {MyOrdersMain} from "./myorders/orders-main";
import {MessagesMain} from "./messages/messages-main";
import {LoginLogin} from "./login/login-login";
import {PostEditMain} from "./post-edit/post-edit-main";
import {ProfileMain} from "./profile/profile-main";


export const routeConfig=[
  {path:'nome',component:LandMain}
]

//import { CanDeactivateGuard } from './can-deactivate-guard.service';

/*
const joinusRoutes: Routes = [
  {path:'',component:LandMain}
  ,{path:'login',component:LoginLogin}
  ,{path:'home',component:LoginLogin}
 ,{path:'connections',component:MyConnectionsMain}
  ,{path:'manage-services',component:MyServicesMain}
  ,{path:'my-service/edit/:id/:type',component:PostEditMain}
  ,{path:'profile',component:ProfileMain}
  //,{path:'manage-services/!*',component:MyServicesMain}
//  ,{path:'orders',component:MyOrdersMain}
//  ,{path:'messages',component:MessagesMain}
 // ,{path:'landing',component:LandMain}
  ,{
    path: 'join-us',
    loadChildren: 'app/join-us/join-us-module#JoinUsModule'
  }
];

const appRoutes: Routes = [
  ...joinusRoutes,
  //...crisisCenterRoutes

];

export const appRoutingProviders: any[] = [
 // authProviders,
 // CanDeactivateGuard
];




export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
*/

