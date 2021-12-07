import {Component, OnInit} from '@angular/core';
import {ListSlidingService} from '../list-sliding/list-sliding.service';

@Component({
    selector: 'app-list-reorder',
    templateUrl: './list-reorder.page.html',
    styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {
    list: Array<any>;

    constructor(private service: ListSlidingService) {
        this.list = this.service.getList();
    }

    ngOnInit() {
    }

}
