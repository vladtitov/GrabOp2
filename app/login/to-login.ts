/**
 * Created by Vlad on 9/5/2016.
 */
import {Component} from "@angular/core";
import {Router} from "@angular/router";
@Component({
  selector:'login-main'
  ,template:` `
})
export class ToLogin{
  constructor(private route:Router){
    route.navigate([{outlets: {important: 'sign-in'}}])
  }

}
