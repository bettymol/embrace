import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-slide5',
    templateUrl: './slide5.page.html',
    styleUrls: ['./slide5.page.scss'],
})
export class Slide5Page implements OnInit {
    list = [
        'assets/images/list/20.jpg',
        'assets/images/list/21.jpg',
        'assets/images/list/22.jpg',
        'assets/images/list/23.jpg',
        'assets/images/list/24.jpg',
        'assets/images/list/25.jpg',
    ];

    slideOpts = {
        direction: 'vertical',
        slidesPerView: 1,
        spaceBetween: 5,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    };

    constructor() {
    }

    ngOnInit() {
    }

}
