/**
 * Created by Vlad on 9/15/2016.
 */
/**
 * Created by Vlad on 9/6/2016.
 */
import {Injectable, EventEmitter} from '@angular/core';
import { Http, Response, } from '@angular/http';
import { Observable}     from 'rxjs/Observable';
import {Subject} from "rxjs";


@Injectable()
export class ToolsService{


  change:EventEmitter<{}> = new EventEmitter();



  constructor (private http: Http) {


  }


}
