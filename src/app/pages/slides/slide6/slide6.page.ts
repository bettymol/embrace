import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-slide6',
    templateUrl: './slide6.page.html',
    styleUrls: ['./slide6.page.scss'],
})
export class Slide6Page implements OnInit {
    list = [
        'assets/images/list/29.jpg',
        'assets/images/list/28.jpg',
        'assets/images/list/27.jpg',
        'assets/images/list/26.jpg',
        'assets/images/list/33.jpg',
        'assets/images/list/32.jpg',
        'assets/images/list/31.jpg',
        'assets/images/list/30.jpg',
        'assets/images/list/21.jpg',
        'assets/images/list/22.jpg',
    ];

    slideOpts = {
        slidesPerView: 4,
        spaceBetween: 30,
        centeredSlides: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    };

    slideOpts1 = {
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    };

    slideOpts2 = {
        slidesPerView: 3,
        slidesPerColumn: 2,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    };

    slideOpts3 = {
        slidesPerView: 1,
        spaceBetween: 10,
        // init: false,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 50,
            },
        }
    };


    constructor() {
    }

    ngOnInit() {
    }

}
