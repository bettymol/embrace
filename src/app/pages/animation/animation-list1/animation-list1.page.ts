import {Component, OnInit} from '@angular/core';
import {AnimationList1Service} from './animation-list1.service';
import {AnimationListModel} from '../../../components/custom-animation-list1/animation-list.model';

@Component({
    selector: 'app-animation-list1',
    templateUrl: './animation-list1.page.html',
    styleUrls: ['./animation-list1.page.scss'],
})
export class AnimationList1Page implements OnInit {
    list: Array<AnimationListModel>;
    animationClassName = 'fade-in-left';

    constructor(private service: AnimationList1Service) {
        this.list = this.service.getList();
    }


    ngOnInit() {
    }

}
