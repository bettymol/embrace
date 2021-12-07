import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'custom-scroll4',
    templateUrl: './custom-scroll4.component.html',
    styleUrls: ['./custom-scroll4.component.scss'],
})
export class CustomScroll4Component {
    img = 'assets/images/profile/2.jpg';
    @Input() user: any;
    @Output() onPhoto = new EventEmitter();
    option = {
        slidesPerView: 3,
        slidesPerColumn: 3,
        spaceBetween: 5,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    };

    option1 = {
        initialSlide: 1,
        speed: 400,
        slidesPerView: 3,
        spaceBetween: 10,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    };

    constructor() {
    }

    photos() {
        this.onPhoto.emit();
    }

}
