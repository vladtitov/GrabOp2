/**
 * Created by Vlad on 9/6/2016.
 */
import {Component, NgModule} from "@angular/core";
import {LandMain} from "./land-main";
import {LandAds} from "./land-ads";
import {LangCool} from "./land-cool";
import {LangHeader} from "./land-header";
import {LangFooter} from "./land-footer";
import {AdsAlliance} from "./ads-alliance";
import {AdsServices} from "./ads-services";
@NgModule({
imports:[

  ]
  ,declarations:[
    LandMain
    ,LandAds
    ,LangCool
    ,LangHeader
    ,LangFooter
    ,AdsAlliance
    ,AdsServices
  ]
  ,providers:[

]
})
export class LandModule{

}
