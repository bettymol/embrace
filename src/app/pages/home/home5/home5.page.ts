import {Component, OnInit} from '@angular/core';
import {Home5Service} from './home5.service';

@Component({
    selector: 'app-home5',
    templateUrl: './home5.page.html',
    styleUrls: ['./home5.page.scss'],
})
export class Home5Page implements OnInit {
    list: Array<string>;
    mList: Array<any>;
    pList: Array<any>;
    nList: Array<any>;

    constructor(private service: Home5Service) {
        this.list = this.service.getBannerList();
        this.mList = this.service.getMList();
        this.pList = this.service.getList();
        this.nList = this.service.getNewList();
    }

    ngOnInit() {
    }

}
