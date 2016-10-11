import { NgModule }      from '@angular/core';
import {CommonModule} from "@angular/common";
import {MyMdImage} from "./md-image";
import {PostEditService} from "../post-edit/posts-edit-service";
import {PostsList} from "./posts-list";
import {PostsCard} from "./posts-card";
import {MembersList} from "./members-list";
import {ListRow} from "./list-row";




@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
     MyMdImage
    ,PostsList
    ,PostsCard
    ,MembersList
    ,ListRow
  ],
  declarations: [
    MyMdImage
    ,PostsList
    ,PostsCard
    ,MembersList
    ,ListRow
  ]
  ,providers:[
    PostEditService
  ]
})
export class SharedModule { }
