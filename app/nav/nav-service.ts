/**
 * Created by Vlad on 9/6/2016.
 */
import {Injectable, EventEmitter} from '@angular/core';
import { Http, Response, } from '@angular/http';
import { Observable}     from 'rxjs/Observable';
import {VONavigation} from "../models/vos";
import {Subject} from "rxjs";
import {Router} from "@angular/router";


@Injectable()
export class NavService{


  change:EventEmitter<{}> = new EventEmitter();



  constructor (private http: Http, private router:Router) {

    this.router.events.subscribe(evt=>this.hideMenu());


  }


/*
  getNavigation():Observable<VONavigation> {

    return this.http.get('api/navigation.json').map((data:any)=>{
      return new VONavigation(data);
    }).catch(this.handleError);

  }*/



  getNavigationP():PromiseLike<VONavigation>{

    return this.http.get('api/data/navigation.json').map(
      (data:any)=>{ return new VONavigation(data.json())}
    ).toPromise();

  }

  isVisible:boolean;
  showMenu():void{
    if(!this.isVisible) {
      this.isVisible = true;
      this.change.emit({visible:this.isVisible});
    }
  }

  hideMenu():void{
    if(this.isVisible) {
      this.isVisible = false;
      this.change.emit({visible:this.isVisible});
    }
  }


}
