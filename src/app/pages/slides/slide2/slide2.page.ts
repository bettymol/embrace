import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-slide2',
    templateUrl: './slide2.page.html',
    styleUrls: ['./slide2.page.scss'],
})
export class Slide2Page implements OnInit {
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
