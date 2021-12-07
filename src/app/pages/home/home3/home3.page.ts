import {Component, OnInit} from '@angular/core';
import {Home3Service} from './home3.service';

@Component({
    selector: 'app-home3',
    templateUrl: './home3.page.html',
    styleUrls: ['./home3.page.scss'],
})
export class Home3Page implements OnInit {
    list: Array<string>;
    pList: Array<any>;
    option = {
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
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

    constructor(private service: Home3Service) {
        this.list = this.service.getBannerList();
        this.pList = this.service.getList();
    }

    ngOnInit() {
    }

}
