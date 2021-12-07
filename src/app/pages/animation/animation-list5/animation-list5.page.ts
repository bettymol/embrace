import {Component, OnInit} from '@angular/core';
import {AnimationListModel} from '../../../components/custom-animation-list1/animation-list.model';
import {AnimationList5Service} from './animation-list5.service';

@Component({
    selector: 'app-animation-list5',
    templateUrl: './animation-list5.page.html',
    styleUrls: ['./animation-list5.page.scss'],
})
export class AnimationList5Page implements OnInit {
    list: Array<AnimationListModel>;
    animationClassName = 'rotate-in-center';

    constructor(private service: AnimationList5Service) {
        this.list = this.service.getList();
    }

    ngOnInit() {
    }

}
