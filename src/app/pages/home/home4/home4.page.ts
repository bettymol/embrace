import {Component, OnInit} from '@angular/core';
import {Home4Service} from './home4.service';


@Component({
    selector: 'app-home4',
    templateUrl: './home4.page.html',
    styleUrls: ['./home4.page.scss'],
})
export class Home4Page implements OnInit {
    list: Array<string>;
    pList: Array<any>;

    constructor(private service: Home4Service) {
        this.list = this.service.getBannerList();
        this.pList = this.service.getList();
    }

    ngOnInit() {
    }

}
