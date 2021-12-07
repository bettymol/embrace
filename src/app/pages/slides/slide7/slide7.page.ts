import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-slide7',
    templateUrl: './slide7.page.html',
    styleUrls: ['./slide7.page.scss'],
})
export class Slide7Page implements OnInit {
    slideOpts = {
        initialSlide: 1,
        speed: 400,
        slidesPerView: 3,
        spaceBetween: 10,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    };

    slideOpts1 = {
        pagination: {
            el: '.swiper-pagination',
            type: 'progressbar',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    };

    slideOpts2 = {
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    };

    slideOpts3 = {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: (index, className) => '<span class="' + className + '">' + (index + 1) + '</span>',
        },
    };

    list = [
        'assets/images/list/20.jpg',
        'assets/images/list/21.jpg',
        'assets/images/list/22.jpg',
        'assets/images/list/23.jpg',
        'assets/images/list/24.jpg',
        'assets/images/list/25.jpg',
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
