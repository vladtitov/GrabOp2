import {Injectable, EventEmitter} from '@angular/core';
import { Http, Response,Headers, RequestOptions } from '@angular/http';
import { Observable}     from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import {VOUser, VOSettings, VOAccount, VOUserExt, VOResult} from "../models/vos";
import {Router} from "@angular/router";
import {BehaviorSubject} from "rxjs/BehaviorSubject";


@Injectable()
export class UserService {


 // private sub:Subject<VOUser>;
  user$:Observable<VOUserExt>;

  //private __myProfile:VOUserExt;

  _user:VOUserExt;
  private userSub:BehaviorSubject<VOUserExt>;


  constructor(private http: Http, private router:Router) {

    this.userSub = new BehaviorSubject<VOUserExt>(new VOUserExt({}));
    this.user$= this.userSub.asObservable();
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

 logout(data:any):Observable<any>{
    var url:string = VOSettings.login+'/logout';

   return this.http.post(url,data);
  }

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

  goTo(url?:string):void{
    var loc:string = VOSettings.getVisit();
    if(!loc) loc= '/profile';
    this.router.navigateByUrl(loc);
  }

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

  getUser():void{
   // var url:string = VOSettings.server+'/profiles/'+VOSettings.user.id+'?format=json&expanded=true';

    var url:string = VOSettings.login+'/user';
     this.http.get(url)
     .map(res=>{return  new VOUser(res.json());})
     .catch((err)=>this.handleError(err)).subscribe(
     (res:any)=> {
        this._user = res;
        this.userSub.next(res);

     }
     )
  }

  saveUser():Promise<VOResult>{
    // var url:string = VOSettings.server+'/profiles/'+VOSettings.user.id+'?format=json&expanded=true';

    var url:string = VOSettings.login+'/user';
   return  this.http.post(url,this._user).toPromise()
      .then(res=>{return  new VOResult(res.json());})

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




