import {Component} from "@angular/core";
@Component({
  selector:'home-main'
  ,template:`
<div>
    <!--Home Main-->
    <div class="card-block">
        <div class="row">
            <div class="col-sm-4">
                <card-yours></card-yours>
            </div>
            <div class="col-sm-4 text-sm-center">
                <profile-complete></profile-complete>
            </div>
            <div class="col-sm-4">    
                <comments-home></comments-home>
            </div>
        </div>
    </div>
    <div class="card-block">
        <home-statistics></home-statistics>
    </div>
    <div class="card-block">
        <they-need-you></they-need-you>
    </div>
    <div class="card-block">    
        <you-need-them></you-need-them>
    </div>
</div>
`
})
export class HomeMain{

}
