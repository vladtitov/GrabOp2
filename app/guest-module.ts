import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule}    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import {Route} from "@angular/router";

import {LandMain} from "./landing/land-main";

import {NavMain} from "./nav/nav-main";
import {NavService} from "./nav/nav-service";
import {LoginLogin} from "./login/login-login";
import {UserService} from "./myservices/user-service";
import {SharedModule} from "./shared/shared-module";

import {RouterModule} from "@angular/router";
import {LandModule} from "./landing/land-module";
import {ToLogin} from "./login/to-login";
import {MySettings} from "./mysettings/my-settings";
import {HowItWorks} from "./pages/how-it-works";
import {TermsOfUse} from "./pages/terms-of-use";
import {ContactUs} from "./pages/contact-us";
import SearchModule from "./search/search-module";
import {SearchMain} from "./search/search-main";
import {UploadService} from "./myservices/upload-service";
import {GuestComponent} from "./guest-component";
import JoinUsModule from "./join-us/join-us-module";
import {JoinUsMain} from "./join-us/join-us-main";




const indexRoute:Route ={ path:'',component:LandMain};
const fallBackRoute:Route ={ path:'**',component:LandMain};

export const routeConfig=[
 {path:'landing',component:LandMain}
 ,{path:'login', component:ToLogin}
// ,{path:'sign-in',component:LoginLogin,outlet:'important'}
  ,{path:'join-us',component:JoinUsMain,outlet:'important'}
  ,{path:'join-us',component:JoinUsMain}
  ,indexRoute
 ,fallBackRoute
]


@NgModule({
  imports: [
    BrowserModule
    ,RouterModule.forRoot(routeConfig)
    ,FormsModule
    ,HttpModule
    ,JsonpModule
   ,SharedModule
    ,LandModule
    ,SearchModule
    ,JoinUsModule
  ],

  declarations: [
    GuestComponent
    ,NavMain
    ,LoginLogin
    ,ToLogin
    ,MySettings
    ,HowItWorks
    ,TermsOfUse
    ,ContactUs
  ],

  bootstrap: [GuestComponent]

  ,providers:[
    ,NavService
    ,UserService
    ,UploadService
  ]
})
export class GuestModule { }
