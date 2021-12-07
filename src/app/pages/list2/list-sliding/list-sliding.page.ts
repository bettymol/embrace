import {Component, OnInit} from '@angular/core';
import {ListSlidingService} from './list-sliding.service';

@Component({
    selector: 'app-list-sliding',
    templateUrl: './list-sliding.page.html',
    styleUrls: ['./list-sliding.page.scss'],
})
export class ListSlidingPage implements OnInit {
    list: Array<any>;

    constructor(private service: ListSlidingService) {
        this.list = this.service.getList();
    }

    ngOnInit() {
    }

}
