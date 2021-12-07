import {Component, OnInit} from '@angular/core';
import {AnimationListModel} from '../../../components/custom-animation-list1/animation-list.model';
import {AnimationList6Service} from './animation-list6.service';

@Component({
    selector: 'app-animation-list6',
    templateUrl: './animation-list6.page.html',
    styleUrls: ['./animation-list6.page.scss'],
})
export class AnimationList6Page implements OnInit {
    list: Array<AnimationListModel>;
    animationClassName = 'fade-in-bl';

    constructor(private service: AnimationList6Service) {
        this.list = this.service.getList();
    }

    ngOnInit() {
    }

}
