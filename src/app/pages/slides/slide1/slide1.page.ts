import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-slide1',
    templateUrl: './slide1.page.html',
    styleUrls: ['./slide1.page.scss'],
})
export class Slide1Page implements OnInit {
    list = [
        {title: 'Easy Customize', img: 'assets/images/slide/1.jpg'},
        {title: 'Welcome to Dark', img: 'assets/images/slide/2.jpg'},
        {title: 'Responsive Design', img: 'assets/images/slide/3.jpg'},
        {title: 'Responsive Design', img: 'assets/images/slide/4.jpg'}
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
