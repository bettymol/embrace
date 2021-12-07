import {Component, OnInit} from '@angular/core';
import {Home7Service} from './home7.service';

@Component({
    selector: 'app-home7',
    templateUrl: './home7.page.html',
    styleUrls: ['./home7.page.scss'],
})
export class Home7Page implements OnInit {
    selectType = 'TOPS';
    segmentList = ['TOPS', 'RECOMMEND', 'NEWS'];
    list: Array<string>;
    pList: Array<any>;
    allList: Array<any>;
    topList: Array<any>;
    userList: Array<any>;
    option = {
        pagination: {
            el: '.swiper-pagination',
            type: 'progressbar',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        }
    };

    constructor(private service: Home7Service) {
        this.list = this.service.getBannerList();
        this.allList = this.service.getList();
        this.topList = this.service.topList();
        this.pList = this.allList;
        this.userList = this.service.userList();
    }

    ngOnInit() {
    }

    segmentChanged(event) {
        console.log(event.target.value);
        this.pList = this.allList.sort(() => Math.random() - 0.5);
    }
}
