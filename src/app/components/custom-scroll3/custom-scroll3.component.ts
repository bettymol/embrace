import {Component, Input} from '@angular/core';

@Component({
    selector: 'custom-scroll3',
    templateUrl: './custom-scroll3.component.html',
    styleUrls: ['./custom-scroll3.component.scss'],
})
export class CustomScroll3Component {
    @Input() list: any;
    option = {
        initialSlide: 1,
        speed: 400,
        slidesPerView: 3,
        spaceBetween: 10,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    };

    option1 = {
        initialSlide: 1,
        speed: 400,
        slidesPerView: 2,
        spaceBetween: 10,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    };

    constructor() {
    }

}
