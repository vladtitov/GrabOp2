import {NgModule} from "@angular/core";
import {ToolingMain} from "./tooling-main";
import {ToolsExplore} from "./tools-explore";
import {ToolsHelp} from "./tools-help";
import {ToolsMenu} from "./tools-menu";
import {ToolsNotifications} from "./tools-notifications";
import {ToolsPersonal} from "./tools-personal";
import {ToolsSearch} from "./tools-search";
import {ToolsPost} from "./tools-post";
import {MyMdImage} from "../shared/md-image";
import {SharedModule} from "../shared/shared-module";
import {CommonModule} from "@angular/common";
import {ToolsService} from "./tools-service";
import {RouterModule} from "@angular/router";
@NgModule({
  imports:[
    CommonModule
    ,SharedModule
    ,RouterModule
  ],
    exports: [
      ToolingMain
    ]
  ,declarations:[
    ToolingMain
    ,ToolsExplore
    ,ToolsHelp
    ,ToolsMenu
    ,ToolsNotifications
    ,ToolsPersonal
    ,ToolsSearch
    ,ToolsPost
  ]
  ,providers:[ToolsService]
})
export class ToolingModule{

}
