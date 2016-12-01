import {Component, OnInit} from "@angular/core";
@Component({
    selector: 'tools-explore'
    , template: `
<div>
    <div class="dropdown" [class.open]="isVisible">
        <a class="btn" (click)="onClick()" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">explore</a>     
        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <h6><span>Business Style</span></h6>
            <a class="dropdown-item" [routerLink]="['/post-edit/basic',{type:'need'}]"  routerLinkActive="active">Business Partnership</a>
            <a class="dropdown-item" [routerLink]="['/post-edit/basic',{type:'offer'}]" routerLinkActive="active">Exchange</a> 
            <a class="dropdown-item" href="#">Internship</a>
            <a class="dropdown-item" href="#">Donate</a>
            <a class="dropdown-item" href="#">Money</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Something else here</a>
        </div>
    </div>
</div>
`
    , host: {
        '(document:click)': 'onDocClick($event)',
    }
    , styles: [`
          h6 {
            position: relative;
            overflow: hidden;
            font-size: 12px;
            /*font-weight: normal;*/
            text-align: center;
          }
          h6 > span {
            display: inline-block;
            margin: 0 .4em;
          }
          h6 > span:before,
          h6 > span:after {
            content: '';
            position: absolute;
            width: 100%;
            border-top: 2px solid #4e4e4e;
            margin-top: .6em;
          }
          h6 > span:before {
            margin-left: -102%;
          }
          h6 > span:after {
            margin-left: 2%;
          }
    `]
})
export class ToolsExplore implements OnInit {
    isVisible: boolean;

    ngOnInit(): void {

    }

    onDocClick(evt: MouseEvent): void {
        if (this.isVisible) this.isVisible = false;
    }

    onClick(evt): void {
        if (!this.isVisible) setTimeout(() => {
            this.isVisible = true
        }, 50);
    }
}
