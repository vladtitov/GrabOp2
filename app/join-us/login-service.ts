/**
 * Created by Vlad on 9/9/2016.
 */

import {Injectable, EventEmitter} from '@angular/core';
import {Http, Response, URLSearchParams,} from '@angular/http';
import { Observable}     from 'rxjs/Observable';
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {VOUserExt, VOSettings, VOResult, VOAccount, VOUser, VOAccountSettings} from "../models/vos";
import {FormControl} from "@angular/forms";

@Injectable()
export class JoinUsService {

    accountSettings$:Observable<VOAccountSettings>;
    private accountSettingsSub:BehaviorSubject<VOAccountSettings>;
    accountSettings:VOAccountSettings;

  account:VOAccount = new VOAccount({});
  constructor(private http: Http) {
      this.accountSettingsSub = new BehaviorSubject<VOAccountSettings>(new VOAccountSettings({}));
      this.accountSettings$=this.accountSettingsSub.asObservable();
      this.get_Settings();
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

    getAccount():Promise<VOAccount>{
        var url:string = VOSettings.login+'/account';
        console.log(url);
        return  this.http.get(url).toPromise()
            .then(res=>{
                return   new VOAccount(res.json());
            })
    }

    updateAccount(account:VOAccount,column:string):Promise<VOResult>{
        // this.account = account;
        var url:string = VOSettings.login+'/update/'+column;
        console.log(url,account);
        return  this.http.post(url,account).toPromise()
            .then(resp=>{
                return   new VOResult(resp.json());
            })
    }

    get_Settings():void{
        var url:string = VOSettings.settings;
        this.http.get(url)
            .map(res=>{return new VOAccountSettings(res.json())})
            .catch((err)=>this.handleError(err))
            .subscribe((res:any)=>{
                this.accountSettings = res;
                this.accountSettingsSub.next(res);
            })
    }

    getSettings():Promise<VOAccountSettings>{
        var url:string = VOSettings.settings;
        return  this.http.get(url).toPromise()
            .then(res=>{
                return  new VOAccountSettings(res.json());
            });
    }

    // getSettings(model:VOAccountSettings):Observable<VOAccountSettings>{
    //     return this.http.get('server/get_icons3.php').map((res:any)=>{
    //         return new VOIcons(res.json());
    //     });
    // }

    setSettings(accountSettings:VOAccountSettings):Promise<VOResult>{
        var url:string = VOSettings.settings;
        return  this.http.post(url,accountSettings).toPromise()
            .then(resp=>{
                return   new VOResult(resp.json());
            })
    }

    private handleError (error: any) {
        console.log(error);
        //this.id++;
        // if(this.id<1000) this.loadProfile();
        let errMsg = (error.message) ? error.message :
            console.error(error);
        return Observable.throw(errMsg);
    }

}
