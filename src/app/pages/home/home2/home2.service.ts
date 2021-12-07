import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class Home2Service {

    getBannerList(): Array<string> {
        return [
            'assets/images/list/4.jpg',
            'assets/images/list/5.jpg',
            'assets/images/list/6.jpg',
            'assets/images/list/7.jpg',
            'assets/images/list/8.jpg',
            'assets/images/list/9.jpg',
            'assets/images/list/10.jpg',
            'assets/images/list/11.jpg',
            'assets/images/list/12.jpg',
            'assets/images/list/13.jpg'
        ];
    }

    getList() {
        return [
            {name: 'Fashion Sport', price: 16, img: 'assets/images/product.png'},
            {name: 'Fashion Sport', price: 16, img: 'assets/images/product.png'},
            {name: 'Fashion Sport', price: 16, img: 'assets/images/product.png'},
            {name: 'Fashion Sport', price: 16, img: 'assets/images/product.png'}
        ];
    }

    getCList() {
        return [
            {
                name: 'Donna K Baker',
                title: 'Standing Barbell or Dumbbell Curls',
                img: 'assets/images/list/14.jpg',
                avatar: 'assets/images/avatar/5.jpg'
            },
            {
                name: 'Crystal R Shook',
                title: 'Barbell or Dumbbell Preacher Curls',
                img: 'assets/images/list/15.jpg',
                avatar: 'assets/images/avatar/6.jpg'
            },
            {
                name: 'Linda R Torres',
                title: 'Seated Dumbbell Curls',
                img: 'assets/images/list/16.jpg',
                avatar: 'assets/images/avatar/7.jpg'
            },
            {
                name: 'Therese',
                title: 'Seated Dumbbell',
                img: 'assets/images/list/17.jpg',
                avatar: 'assets/images/avatar/8.jpg'
            },

        ];
    }

}
