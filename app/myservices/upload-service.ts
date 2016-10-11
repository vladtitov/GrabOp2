/**
 * Created by Vlad on 9/21/2016.
 */
///<reference path="../tsds/jquery.d.ts"/>

import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {VOResult, VOSettings} from "../models/vos";
@Injectable()

export class UploadService{

   upload(form:FormData,belong:string,id:number):JQueryPromise<VOResult>{

      return  $.ajax({
        url: VOSettings.upload+'?api=belong/'+belong+'/'+id,
        type: 'POST',
        dataType: 'json',
        data: form,
        cache: false,
        contentType: false,
        processData: false
      });

  }
}
