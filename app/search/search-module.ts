/**
 * Created by Vlad on 9/19/2016.
 */
import { NgModule }       from '@angular/core';
import {FormsModule, ReactiveFormsModule}    from '@angular/forms';
import { CommonModule }   from '@angular/common';
import {RouterModule} from "@angular/router";
import {SharedModule} from "../shared/shared-module";
import {SearchMain} from "./search-main";
import {SearchResult} from "./search-result";
import {FormSearchAdvanced} from "../forms/form-search-advanced";


const myRoutes = [
  { path: 'search' ,component: SearchMain }

];


@NgModule({
  exports:[
    SearchMain
  ]
  ,imports: [
    CommonModule
    ,FormsModule
    ,ReactiveFormsModule
    ,RouterModule.forChild(myRoutes)
    ,SharedModule

  ],
  declarations: [
    SearchMain
    ,SearchResult
    ,FormSearchAdvanced


  ],

  providers: [

  ]
})
export default class SearchModule {}
