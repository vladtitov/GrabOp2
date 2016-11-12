/**
 * Created by Vlad on 9/19/2016.
 */
import {Component, OnInit} from "@angular/core";
import {PostEditService} from "../post-edit/posts-edit-service";
import {VOPost} from "../models/vos";
@Component({
  selector:'search-result'
  ,template:`
    <h5>Results: {{numberPosts}}</h5>
    <br>
    <div class="card text-xs-center">
          <div class="card-header">
            <ul class="nav nav-tabs card-header-tabs float-xs-left">
              <li class="nav-item">
                <!--<a class="nav-link" routerLink="/profile-edit/personal" routerLinkActive="active">Offerings</a>-->
                <a class="nav-link" [class.active]="onOfferings" (click)="onOfferingsClick()">
                    <span class="text-muted">Offerings </span><span class="text-primary">({{numberOffers}})</span>
                </a>
              </li>
              <li class="nav-item">
                <!--<a class="nav-link" routerLink="/profile-edit/company" routerLinkActive="active">Needs</a>-->
                <a class="nav-link" [class.active]="onNeeds" (click)="onNeedsClick()">
                    <span class="text-muted">Needs </span><span class="text-primary">({{numberNeeds}})</span>
                </a>
              </li>
              <li class="nav-item">
                <!--<a class="nav-link" routerLink="/profile-edit/assets" routerLinkActive="active">People</a>-->
                <a class="nav-link" [class.active]="onPeople" (click)="onPeopleClick()">People</a>
              </li>
            </ul>
          </div>
          <div class="card-block">
          <div *ngIf="myMsg">{{myMsg}}</div>
            <posts-list *ngIf="onOfferings" [posts]="offer" (selected)="onPostSelect($event)"></posts-list>
            <posts-list *ngIf="onNeeds" [posts]="need" (selected)="onPostSelect($event)"></posts-list>
            <posts-list *ngIf="onPeople" [posts]="people" (selected)="onPostSelect($event)"></posts-list>
            <!--<h4 class="card-title">Special title treatment</h4>-->
            <!--<p class="card-text">With supporting text below as a natural lead-in to additional content.</p>-->
            <!--<a href="#" class="btn btn-primary">update</a>-->
          <!--</div>-->
          <router-outlet></router-outlet>
        </div>
      </div>
 `
})
export class SearchResult extends OnInit{
    onOfferings:boolean;
    onNeeds:boolean;
    onPeople:boolean;
    need:VOPost[];
    offer:VOPost[];
    numberPosts:number;
    numberNeeds:number;
    numberOffers:number;

    constructor(private postsService:PostEditService){
        super();
        this.postsService.getAllPosts().subscribe(
            (posts:VOPost[])=>{
                this.need = posts.filter(item=>{ return item.type=='need'});
                this.offer = posts.filter(item=>{ return item.type=='offer'});
                this.numberPosts = posts.length;
                this.numberNeeds = this.need.length;
                this.numberOffers = this.offer.length;
                console.log(posts);
            });
    }

    ngOnInit(){
        this.onOfferings = true

    }

    onOfferingsClick(){
        this.onOfferings=true;
        this.onNeeds=false;
        this.onPeople=false;
    }

    onNeedsClick(){
        this.onOfferings=false;
        this.onNeeds=true;
        this.onPeople=false;
    }

    onPeopleClick(){
        this.onOfferings=false;
        this.onNeeds=false;
        this.onPeople=true;
    }


}
