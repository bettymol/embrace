import {Component, OnInit} from '@angular/core';
import {List4Service} from './list4.service';

@Component({
    selector: 'app-list4',
    templateUrl: './list4.page.html',
    styleUrls: ['./list4.page.scss'],
})
export class List4Page implements OnInit {
    list: Array<any>;

    constructor(private service: List4Service) {
        this.list = this.service.getList();
    }

    ngOnInit() {
    }

}
