import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class AnimationList2Service {
    getList(): Array<any> {
        return [
            {
                name: 'Emma', title: 'Barbell Deadlift', price: 99, img: 'assets/images/list/35.jpg',
                img1: 'assets/images/list/34.jpg',
                img2: 'assets/images/list/38.jpg', avatar: 'assets/images/avatar/5.jpg'
            },
            {
                name: 'Isabella',
                title: 'Bent Barbell Row',
                price: 199,
                img: 'assets/images/list/3.jpg',
                img1: 'assets/images/list/6.jpg',
                img2: 'assets/images/list/11.jpg',
                avatar: 'assets/images/avatar/6.jpg'
            },
            {
                name: 'Emily', title: 'Wide-Grip Pull-Up', price: 299,
                img: 'assets/images/list/23.jpg',
                img1: 'assets/images/list/24.jpg',
                img2: 'assets/images/list/18.jpg', avatar: 'assets/images/avatar/7.jpg'
            },
            {
                name: 'Olivia',
                title: 'Standing T-Bar Row',
                price: 399,
                img: 'assets/images/list/12.jpg',
                img1: 'assets/images/list/12.jpg',
                img2: 'assets/images/list/12.jpg',
                avatar: 'assets/images/avatar/8.jpg'
            },
            {
                name: 'Natalie',
                title: 'Wide-Grip Seated Cable Row',
                price: 99,
                img: 'assets/images/list/19.jpg',
                img1: 'assets/images/list/20.jpg',
                img2: 'assets/images/list/21.jpg',
                avatar: 'assets/images/avatar/4.jpg'
            },
            {
                name: 'Ashley',
                title: 'Reverse-Grip Smith Machine Row',
                price: 199,
                img: 'assets/images/list/22.jpg',
                img1: 'assets/images/list/23.jpg',
                img2: 'assets/images/list/24.jpg',
                avatar: 'assets/images/avatar/3.jpg'
            },
        ];
    }
}
