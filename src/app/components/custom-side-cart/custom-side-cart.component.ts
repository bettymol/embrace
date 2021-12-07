import {Component} from '@angular/core';

@Component({
    selector: 'custom-side-cart',
    templateUrl: './custom-side-cart.component.html',
    styleUrls: ['./custom-side-cart.component.scss'],
})
export class CustomSideCartComponent {
    list = [
        {name: 'Barbell', price: 13, numbers: 3, img: 'assets/images/list/22.jpg'},
        {name: 'Bent Barbell', price: 199, numbers: 3, img: 'assets/images/list/23.jpg'},
        {name: 'Pull-Up', price: 56, numbers: 5, img: 'assets/images/list/24.jpg'},
        {name: 'Standing', price: 67, numbers: 5, img: 'assets/images/list/25.jpg'},
        {name: 'Wide-Grip', price: 16, numbers: 6, img: 'assets/images/list/26.jpg'},
        {name: 'Reverse-Grip', price: 19, numbers: 9, img: 'assets/images/list/27.jpg'},
    ];

    constructor() {
    }
}
