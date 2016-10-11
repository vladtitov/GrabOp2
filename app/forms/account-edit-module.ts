import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {EditAssets} from "./forms-assets";
import {FormsPersonal} from "./forms-personal";
import {FormsCompany} from "./forms-company";


@NgModule({
  exports:[
    EditAssets
    ,FormsPersonal
    ,FormsCompany
  ]
  ,imports: [
    CommonModule
    ,FormsModule
    ,ReactiveFormsModule
  ],
  declarations: [
    EditAssets
    ,FormsPersonal
    ,FormsCompany

  ],

  providers: [

  ]
})
export default class AccountEditModule {}
