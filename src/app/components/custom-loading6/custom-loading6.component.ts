import {Component} from '@angular/core';

@Component({
    selector: 'custom-loading6',
    templateUrl: './custom-loading6.component.html',
    styleUrls: ['./custom-loading6.component.scss'],
})
export class CustomLoading6Component {
    fList = [
        {name: 'Favorite', num: 99},
        {name: 'Follows', num: 233},
        {name: 'Following', num: 999}
    ];
    tList = ['card', 'clock', 'mail', 'pricetags'];
    t2List = [
        {name: 'pay', icon: 'ribbon'},
        {name: 'video', icon: 'videocam'},
        {name: 'review', icon: 'flame'},
        {name: 'bag', icon: 'ios-cart'},

    ];

    constructor() {
    }

}
