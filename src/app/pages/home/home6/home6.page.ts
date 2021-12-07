import {Component, OnInit} from '@angular/core';
import {Home6Service} from './home6.service';

@Component({
    selector: 'app-home6',
    templateUrl: './home6.page.html',
    styleUrls: ['./home6.page.scss'],
})
export class Home6Page implements OnInit {
    list: Array<string>;
    pList: Array<any>;
    display = 'list';

    constructor(private service: Home6Service) {
        this.list = this.service.getBannerList();
        this.pList = this.service.getList();
    }

    ngOnInit() {
    }

    onToggle(key: string) {
        this.display = key;
    }

}
