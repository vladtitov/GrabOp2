/**
 * Created by Vlad on 9/6/2016.
 */

import {Component, OnInit} from "@angular/core";
import {VOAccount, VOUserExt} from "../models/vos";
import {UserService} from "../myservices/user-service";
@Component({
  selector:'card-yours'
  ,template:`
<div>
 Card Yours
<div my-md-image="account.profile_pic"></div>
 <div>{{account.displayName}}</div>
        <div><span>{{account.city}}</span>, <span>{{account.province}}</span></div> 
        <div>
          <div>Offerings: <span>{{account.offers}}</span></div>
          <div>Needs: <span>{{account.needs}}</span></div>        
        </div>        
</div>
`
})
export class CardYours implements OnInit{
  account:VOUserExt  = new VOUserExt({});
  myImage = this.account.profile_pic

constructor(private loginService:UserService){

}
ngOnInit():void {

  this.loginService.myAccount$.subscribe(
    acc =>{
      console.log(acc)
      this.account = acc

    }

  )
}

}
