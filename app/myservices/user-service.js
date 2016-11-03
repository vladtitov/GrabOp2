"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var vos_1 = require("../models/vos");
var router_1 = require("@angular/router");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var UserService = (function () {
    function UserService(http, router) {
        this.http = http;
        this.router = router;
        this.userSub = new BehaviorSubject_1.BehaviorSubject(new vos_1.VOUserExt({}));
        this.user$ = this.userSub.asObservable();
        console.log('person service init');
        this.getUser();
    }
    /* get myAccount$():Observable<VOUserExt>{
       if(!this._myAccount$) {
         this._myAccount$ = this.myProfileSubject.asObservable();
         this.callLoginScreen()
       }
       return this._myAccount$
     }*/
    UserService.prototype.logout = function (data) {
        var url = vos_1.VOSettings.login + '/logout';
        return this.http.post(url, data);
    };
    /* callLoginScreen():void{
      // console.log('callLoginScreen   ')
           setTimeout(()=>{
             this.router.navigate([{outlets: {important: 'sign-in'}}])
           },500)
   
     }*/
    /*
      getSaved():void{
        this._myAccount$ = this.myProfileSubject.asObservable();
        this.http.get('api/user.json').map(res=>{return new VOUser(res.json())}).subscribe(
          user=>this.user = user
        )
        this.http.get('api/person.json').map(res=>{return new VOUserExt(res.json())}).subscribe(
            person=>{
              this.__myProfile = person;
              this.myProfileSubject.next(this.__myProfile);
            }
        )
      }
    
      saveDataOnServer(file_name:string,data:any){
        this.http.post('api/save.php?filename='+file_name+'.json',JSON.stringify(data)).subscribe(
          res=>{
            console.log(res);
          }
        )
      }*/
    /*
      login(user:VOUser):Observable<VOUser>{
    
        var url:string = VOSettings.login+'/auth';
        this.http.post(url,user).map(
          (res:any)=>{
            var data:any = res.json();
            delete data.ResponseStatus;
            return new VOUser(data)}
        ).subscribe(
          (user:VOUser)=>{
           if(user.SessionId){
             user.isLogin = true;
            this.user = user;
           //  this.saveDataOnServer('user',user);
            // this.goTo();
             this.getAccount();
           }
         }
        )
        return this.login$;
      }*/
    UserService.prototype.goTo = function (url) {
        var loc = vos_1.VOSettings.getVisit();
        if (!loc)
            loc = '/profile';
        this.router.navigateByUrl(loc);
    };
    /* set user(user:VOUser){
       console.log(user);
       user.role = VOUser.ADMIN;
       VOSettings.user = user;
       this.sub.next(user)
     }
   
     get user():VOUser{
       if(!VOSettings.user)this.callLoginScreen();
       return VOSettings.user;
     }*/
    UserService.prototype.getUser = function () {
        // var url:string = VOSettings.server+'/profiles/'+VOSettings.user.id+'?format=json&expanded=true';
        var _this = this;
        var url = vos_1.VOSettings.login + '/user';
        this.http.get(url)
            .map(function (res) { return new vos_1.VOUser(res.json()); })
            .catch(function (err) { return _this.handleError(err); }).subscribe(function (res) {
            _this._user = res;
            _this.userSub.next(res);
        });
    };
    UserService.prototype.saveUser = function () {
        // var url:string = VOSettings.server+'/profiles/'+VOSettings.user.id+'?format=json&expanded=true';
        var url = vos_1.VOSettings.login + '/user';
        return this.http.post(url, this._user).toPromise()
            .then(function (res) { return new vos_1.VOResult(res.json()); });
    };
    UserService.prototype.getStatistics = function () {
        // var url:string = VOSettings.server+'/profiles/'+VOSettings.user.id+'?format=json&expanded=true';
        var url = vos_1.VOSettings.statistics;
        return this.http.get(url).map(function (res) {
            return new vos_1.VOResult(res.json());
        });
    };
    UserService.prototype.handleError = function (error) {
        console.log(error);
        //this.id++;
        // if(this.id<1000) this.loadProfile();
        var errMsg = (error.message) ? error.message :
            console.error(error);
        return Observable_1.Observable.throw(errMsg);
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user-service.js.map