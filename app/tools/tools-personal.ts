/**
 * Created by Vlad on 9/6/2016.
 */
import {Component, OnInit} from "@angular/core";

import {VOAccount, VOUserExt} from "../models/vos";
import {UserService} from "../myservices/user-service";


@Component({
    selector: 'tools-personal'
    , template: `
<div>
    <!--<div class="s40x40 round" [style.background-image] ="myImage"> </div>   -->
    <div class="row">
        <div class="col-sm-4"><div [my-md-image]="myImage"> </div></div>
        <!--<div [userClass]="'col-sm-2'" [my-md-image]="myImage"> </div>-->
        <div class="col-sm-8"><h5>{{name}}</h5></div>
    </div>
</div>
`
})
export class ToolsPersonal implements OnInit {
// myImage:string = 'url(img/img-girl.jpg)';
    myImage: string = '';
    name: string = '';
    private myStyle: any;

    private user: VOUserExt;

    constructor(private userService: UserService) {

    }

    ngOnInit(): void {
        //  this.profileService.myAccount$.subscribe(profile=>this.myImage = profile.profile_pic);
        this.userService.user$.subscribe(
            user => {
                this.user = user;
                this.myImage = 'url(' + this.user.profile_pic + ')';
                this.name = user.firstName + ' ' + user.lastName;
            }
        );
    }

}
