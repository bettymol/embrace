import {Component, OnInit} from '@angular/core';
import {AnimationList2Service} from './animation-list2.service';

@Component({
    selector: 'app-animation-list2',
    templateUrl: './animation-list2.page.html',
    styleUrls: ['./animation-list2.page.scss'],
})
export class AnimationList2Page implements OnInit {
    list: Array<any>;
    animationClassName = 'slide-in-right';

    constructor(private service: AnimationList2Service) {
        this.list = this.service.getList();
    }


    ngOnInit() {
    }

}
