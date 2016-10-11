import {Injectable, EventEmitter} from '@angular/core';
import { Http, Response, } from '@angular/http';
import { Observable}     from 'rxjs/Observable';
import {Subject} from "rxjs";


@Injectable()
export class ServiceMessages {


  constructor(private http: Http) {


  }
}
