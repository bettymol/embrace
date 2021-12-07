import {Component, Input} from '@angular/core';

@Component({
    selector: 'custom-loading8',
    templateUrl: './custom-loading8.component.html',
    styleUrls: ['./custom-loading8.component.scss'],
})
export class CustomLoading8Component {
    @Input() list: Array<any>;
    option = {
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    };

    constructor() {
    }

}
