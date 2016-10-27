import {Component} from "@angular/core";
@Component({
  selector:'home-main'
  ,template:`
<div>
    Home Main
        <div class="row">
            <div class="col-sm-4">
                <card-yours></card-yours>
            </div>
            <div class="col-sm-4">
                <profile-complete></profile-complete>
            </div>
            <div class="col-sm-4">    
                <comments-home></comments-home>
            </div>
        </div>
            <home-statistics></home-statistics>
                <they-need-you></they-need-you>
                <you-need-them></you-need-them>
</div>
`
})
export class HomeMain{

}
