import {Component, OnInit} from '@angular/core';
import {Home2Service} from './home2.service';

@Component({
    selector: 'app-home2',
    templateUrl: './home2.page.html',
    styleUrls: ['./home2.page.scss'],
})
export class Home2Page implements OnInit {
    list: Array<string>;
    pList: Array<any>;
    pageList = [1, 2, 3, 4, 5];
    cList: Array<any>;
    option = {
        slidesPerView: 3,
        slidesPerColumn: 2,
        spaceBetween: 10,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    };

    constructor(private service: Home2Service) {
        this.list = this.service.getBannerList();
        this.pList = this.service.getList();
        this.cList = this.service.getCList();
    }

    ngOnInit() {
    }

    onPage(item) {
    }


}
