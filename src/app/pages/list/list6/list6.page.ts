import {Component, OnInit} from '@angular/core';
import {List6Service} from './list6.service';

@Component({
    selector: 'app-list6',
    templateUrl: './list6.page.html',
    styleUrls: ['./list6.page.scss'],
})
export class List6Page implements OnInit {
    list: Array<any>;

    constructor(private service: List6Service) {
        this.list = this.service.getList();
    }

    ngOnInit() {
    }

}
