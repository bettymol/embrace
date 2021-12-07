import {Component, OnInit} from '@angular/core';
import {ListSlidingService} from '../../list2/list-sliding/list-sliding.service';

@Component({
    selector: 'app-scroll6',
    templateUrl: './scroll6.page.html',
    styleUrls: ['./scroll6.page.scss']
})
export class Scroll6Page implements OnInit {
    gList: Array<any>;
    list: Array<any>;

    constructor(private service: ListSlidingService) {
        this.gList = this.service.getList().map((g, i) => Object.assign({id: new Date().getTime() + i, ...g}));
        this.list = this.gList.slice(0, 3);
    }

    ngOnInit() {
    }
}
