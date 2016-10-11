import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule}    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import {Route} from "@angular/router";
import { AppComponent }  from './app.component';
import {ToolingModule} from "./tools/tooling-module";
import {ToolingMain} from "./tools/tooling-main";

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




const indexRoute:Route ={ path:'',component:LandMain};
const fallBackRoute:Route ={ path:'**',component:LandMain};

export const routeConfig=[
 {path:'landing',component:LandMain}
 ,{path:'login', component:ToLogin}
 ,{path:'sign-in',component:LoginLogin,outlet:'important'}
 //,{path:'join-us',loadChildren:'app/join-us/join-us-module'}
  ,{path:'home',loadChildren:'app/home/home-module'}
  ,{path:'messages',loadChildren:'app/messages/messages-module'}
  ,{path:'connections',loadChildren:'app/connections/connections-module'}
  ,{path:'opportunities',loadChildren:'app/opportunities/opportunities-module'}
  ,{path:'projects',loadChildren:'app/projects/projects-module'}
  ,{path:'alliances',loadChildren:'app/alliances/alliances-module'}
  ,{path:'settings', component:MySettings}
  ,{path:'how-it-works', component:HowItWorks}
  ,{path:'terms-of-use', component:TermsOfUse}
  ,{path:'search', component:SearchMain}
  ,{path:'contact-us', component:ContactUs}
  ,{path:'profile',loadChildren:'app/profile/profile-module'}
  ,{path:'profile-edit',loadChildren:'app/profile-edit/profile-edit-module'}
  ,{path:'post-edit',loadChildren:'app/post-edit/post-edit-module#PostEditModule'}
  ,indexRoute
 //,fallBackRoute
]


@NgModule({
  imports: [
    BrowserModule
    ,RouterModule.forRoot(routeConfig)
    ,FormsModule
    ,ToolingModule
    ,HttpModule
    ,JsonpModule
   ,SharedModule
    ,LandModule
    ,SearchModule
  ],

  declarations: [
    AppComponent
    ,NavMain
    ,LoginLogin
    ,ToLogin
    ,MySettings
    ,HowItWorks
    ,TermsOfUse
    ,ContactUs
  ],

  bootstrap: [ AppComponent ]

  ,providers:[
    ,NavService
    ,UserService
    ,UploadService
  ]
})
export class AppModule { }
