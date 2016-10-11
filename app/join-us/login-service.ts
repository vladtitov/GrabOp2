/**
 * Created by Vlad on 9/9/2016.
 */

import {Injectable, EventEmitter} from '@angular/core';
import {Http, Response, URLSearchParams,} from '@angular/http';
import { Observable}     from 'rxjs/Observable';
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {VOUserExt, VOSettings, VOResult, VOAccount, VOUser} from "../models/vos";
import {FormControl} from "@angular/forms";

@Injectable()
export class JoinUsService {

  account:VOAccount = new VOAccount({});
  constructor(private http: Http) {


  }

  exists(value:any,column:string):Promise<VOResult>{
    var url:string = VOSettings.login+'/exists/'+column;
   return this.http.post(url,value).toPromise().then(
    res=>{ return new VOResult(res.json())}
   )
  }

  confirmPassword(password:string, ctrl:FormControl) {

  return password === ctrl.value ? null : { confirmPassword:false};

  }

  createAccount(account:VOAccount):Promise<VOResult>{
    this.account = account;
    var url:string = VOSettings.login+'/create';
    console.log(url,account);
   return  this.http.post(url,account).toPromise()
     .then(resp=>{
       return   new VOResult(resp.json());

     })


  }
  login(account:VOAccount):Promise<VOResult>{
    this.account = account;
    var url:string = VOSettings.login+'/auth';
    console.log(url,account);
    return  this.http.post(url,account).toPromise()
      .then(resp=>{
        return   new VOResult(resp.json());

      })

  }

}
