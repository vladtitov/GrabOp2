/**
 * Created by Vlad on 9/6/2016.
 */
import {Component, OnInit} from "@angular/core";
import {UserService} from "../myservices/user-service";
@Component({
    selector: 'tools-menu'
    , template: `
<div>
        <!--<span class="fa fa-bars btn"></span>-->
        <div class="dropdown" [class.open]="isVisible">
            <a class=" fa fa-bars btn" (click)="onClick()"></a>     
            <div class="dropdown-menu">
                <a class="dropdown-item" [routerLink]="['/settings']" routerLinkActive="active">Settings</a>
                <a class="dropdown-item" [routerLink]="['/how-it-works']" routerLinkActive="active">How it works</a> 
                <a class="dropdown-item" [routerLink]="['/contact-us']" routerLinkActive="active">Contact us</a>
                <a class="dropdown-item" [routerLink]="['/terms-of-use']" routerLinkActive="active">Terms of Use</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" (click)="onLogout()">Sign out</a>             
            </div>
        </div>
</div>
`
    , host: {
        '(document:click)': 'onDocClick($event)',
    }
})
export class ToolsMenu implements OnInit {

    isVisible: boolean;

    constructor(private accountService:UserService){}

    onLogout():void{
        this.accountService.logout({lastURL:'none'}).subscribe(
            res=>{

            }
        );
    }

    ngOnInit(): void {}

    onDocClick(evt: MouseEvent): void {
        if (this.isVisible) this.isVisible = false;
    }

    onClick(evt): void {
        if (!this.isVisible) setTimeout(() => {
            this.isVisible = true
        }, 50);
    }

}
