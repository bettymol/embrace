import {Component, OnInit} from '@angular/core';
import {ListSlidingService} from '../list-sliding/list-sliding.service';

@Component({
    selector: 'app-list-refresher',
    templateUrl: './list-refresher.page.html',
    styleUrls: ['./list-refresher.page.scss'],
})
export class ListRefresherPage implements OnInit {
    list: Array<any>;

    constructor(private service: ListSlidingService) {
        this.list = this.service.getList();
    }

    ngOnInit() {
    }

    doRefresh(event) {
        this.list = this.list.sort(() => Math.random() - 0.5);
        setTimeout(() => {
            event.target.complete();
        }, 2000);
    }
}
