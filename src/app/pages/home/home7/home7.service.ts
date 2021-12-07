import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class Home7Service {

    getBannerList(): Array<string> {
        return [
            'assets/images/list/11.jpg',
            'assets/images/list/12.jpg',
            'assets/images/list/13.jpg'
        ];
    }

    topList() {
        return [
            'assets/images/list/7.jpg',
            'assets/images/list/6.jpg',
            'assets/images/list/5.jpg',
            'assets/images/list/4.jpg',
            'assets/images/list/3.jpg',
            'assets/images/list/2.jpg',
        ];
    }

    getList() {
        return [
            {name: 'Standing', price: 23, img: 'assets/images/list/15.jpg'},
            {name: 'Seated', price: 21, img: 'assets/images/list/16.jpg'},
            {name: 'Hanging', price: 25, img: 'assets/images/list/17.jpg'},
            {name: 'Barbell', price: 27, img: 'assets/images/list/18.jpg'},
            {name: 'Cable', price: 33, img: 'assets/images/list/19.jpg'},
            {name: 'Dumbbell', price: 19, img: 'assets/images/list/20.jpg'},
        ];
    }

    userList() {
        return [
            {name: 'Caroline', price: 23, img: 'assets/images/avatar/1.jpg'},
            {name: 'Autumn', price: 21, img: 'assets/images/avatar/2.jpg'},
            {name: 'Angelina ', price: 25, img: 'assets/images/avatar/3.jpg'},
        ];
    }
}
