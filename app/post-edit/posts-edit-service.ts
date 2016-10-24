///<reference path="../../typings/promise.d.ts"/>

import {Injectable, EventEmitter} from '@angular/core';
import { Http, Response, } from '@angular/http';
import { Observable}     from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';

import {VOSettings, VOService, VOResult, VOPost, VOImage, VOCategory} from "../models/vos";



@Injectable()
export class PostEditService {


  private __posts:VOService[];
  private _currentService:VOService;
  private myServicesSubject:Subject<VOService[]>
  myServices:Observable<VOService[]>
  private myServiceSubject:Subject<VOService>// = new Subject<VOService>();
  myService:Observable<VOService>;

  constructor(private http: Http) {
    console.log('PostsEditService');
    this.myServicesSubject  = new Subject<VOService[]>();
    this.myServices = this.myServicesSubject.asObservable();
    this.myServiceSubject = new Subject<VOService>();
    this.myService = this.myServiceSubject.asObservable();
 // this.loadServices();
  }

  private loadServices():void{

    var url:string = VOSettings.server+'/profiles/'+VOSettings.user.id;

    this.http.get(url)
      .map((res:Response)=>{ return res.json().map(function(item:any){ return new VOService(item)});})
      .catch(this.handleError).subscribe(
      (res:any)=> {
        this.__posts = res
        this.myServicesSubject.next(res);
        if(this.selectedId)this._selectById();
      }
    )
  }

  getPosts():Observable<any>{
    var url:string = VOSettings.server+'posts';
    return this.http.get(url)
      .map((res:Response)=>{
      return res.json().map(function(item){ return new VOPost(item)});
    })
      .catch(this.handleError)
  }

  getPostById(id:number):Observable<any>{
    console.log('get post by id'+id);

    var url:string = VOSettings.server+'/post/'+id;
    return this.http.get(url)
      .map((res:Response)=>{ return new VOPost(res.json())})
      .catch(this.handleError)

  }

  deleteAttachment(psot_id:number,id:number):Promise<VOResult>{
    var url:string = VOSettings.server+'post/'+psot_id+'/attachment/'+id;
    return this.http.delete(url).toPromise()
      .then(res=>new VOResult(res.json()));
  }

  getAttachments(post_id:number):Promise<VOImage[]>{
    var url:string = VOSettings.server+'/post/'+post_id+'/attachments';
    return this.http.get(url).toPromise()
      .then((res)=>{
      return res.json().map(function(item){ return  new VOImage(item);})
  })

  }
  saveAttachment(data:VOImage,post_id:number):Promise<VOResult>{

    var url:string =  VOSettings.server+'post/'+post_id+'/attachment/'+data.id;

    console.log(url,data);

    return this.http.post(url,data).toPromise()
      .then((res:Response)=>{
        console.log(res);
        return new VOResult(res.json())
      })
  }



  getCategories():Promise<VOCategory[]>{
    var url:string = VOSettings.server+'/posts-categories';
    return this.http.get(url).toPromise()
      .then((res)=>{
        return res.json().map(function(item){ return  new VOCategory(item);})
      })

  }


  private selectedId:number;
  private _selectById():void{
    var id= this.selectedId;
    if(this.__posts){
      var serv:VOService[] = this.__posts.filter(function(item:VOService){ return item.id === id});
      if(serv.length) this.myServiceSubject.next(serv[0])
    }
  }

  selectServiceById(id:number):void{
    this.selectedId = id;
    this._selectById();

  }

    updatePost(post:VOPost):Observable<any>{
        // var url:string = VOSettings.server+'/post/'+post.id;
        var url:string = VOSettings.posts;
      //  var post:VOPost = this._currentService;
        console.log(url,post);

        return this.http.patch(url,post)
          .map((res:Response)=>{
            console.log(res);
            return new VOResult(res.json())
        }).catch(this.handleError)
    }

    insertPost(post:VOPost):Observable<any>{
        // var url:string = VOSettings.server+'/post/'+post.id;
        var url:string = VOSettings.posts;
        //  var post:VOPost = this._currentService;
        console.log(url,post);

        return this.http.put(url,post)
            .map((res:Response)=>{
                console.log(res);
                return new VOResult(res.json())
            }).catch(this.handleError)
    }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
   console.error(error);
    return Observable.throw(errMsg);
  }

}
