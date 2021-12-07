import {Component, OnInit} from '@angular/core';
import {ListSlidingService} from '../../list2/list-sliding/list-sliding.service';

@Component({
    selector: 'app-loading1',
    templateUrl: './loading1.page.html',
    styleUrls: ['./loading1.page.scss'],
})
export class Loading1Page implements OnInit {
    list: Array<any>;

    constructor(private service: ListSlidingService) {
        this.list = this.service.getList();
    }

    ngOnInit() {
    }

    doRefresh(event) {
        setTimeout(() => {
            this.list = this.list.sort(() => Math.random() - 0.5);
            event.target.complete();
        }, 2000);
    }
}
