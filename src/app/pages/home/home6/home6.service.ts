import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class Home6Service {

    getBannerList(): Array<string> {
        return [
            'assets/images/list/42.jpg',
            'assets/images/list/43.jpg',
            'assets/images/list/44.jpg'
        ];
    }

    getList() {
        return [
            {name: 'Barbell Deadlift', price: 23, img: 'assets/images/list/45.jpg'},
            {name: 'Barbell Curl', price: 21, img: 'assets/images/list/25.jpg'},
            {name: 'Hanging Leg Raise', price: 25, img: 'assets/images/list/24.jpg'},
            {name: 'Front Barbell Squat', price: 27, img: 'assets/images/list/23.jpg'},
            {name: 'Special chicken', price: 33, img: 'assets/images/list/22.jpg'},
            {name: 'Incline Bench Pull', price: 19, img: 'assets/images/list/21.jpg'},
        ];
    }
}
