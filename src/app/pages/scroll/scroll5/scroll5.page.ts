import {Component, OnInit} from '@angular/core';
import {Scroll5Service} from './scroll5.service';

@Component({
    selector: 'app-scroll5',
    templateUrl: './scroll5.page.html',
    styleUrls: ['./scroll5.page.scss'],
})
export class Scroll5Page implements OnInit {
    user: any;
    list: Array<any>;

    constructor(private service: Scroll5Service) {
        this.list = this.service.getList();
        this.user = this.service.getUser();
    }

    ngOnInit() {
    }

}
