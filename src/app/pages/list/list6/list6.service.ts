import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class List6Service {
    getList(): Array<any> {
        return [
            {
                title: 'Flat Barbell or Dumbbell Bench Press',
                img: 'assets/images/list/2.jpg',
                img1: 'assets/images/list/1.jpg',
                img2: 'assets/images/list/2.jpg',
                img3: 'assets/images/list/3.jpg',
                views: 2999
            },
            {
                title: 'Flat Dumbbell Flyes',
                img: 'assets/images/list/11.jpg',
                img1: 'assets/images/list/4.jpg',
                img2: 'assets/images/list/5.jpg',
                img3: 'assets/images/list/6.jpg',
                views: 2888
            },
            {
                title: 'Pec Deck Machine',
                img: 'assets/images/list/7.jpg',
                img1: 'assets/images/list/20.jpg',
                img2: 'assets/images/list/21.jpg',
                img3: 'assets/images/list/23.jpg',
                views: 2999
            },
            {
                title: 'Decline Dumbbell Flyes',
                img: 'assets/images/list/26.jpg',
                img1: 'assets/images/list/26.jpg',
                img2: 'assets/images/list/27.jpg',
                img3: 'assets/images/list/28.jpg',
                views: 3888
            },
            {
                title: 'Decline Chest Press Machine',
                img: 'assets/images/list/40.jpg',
                img1: 'assets/images/list/30.jpg',
                img2: 'assets/images/list/31.jpg',
                img3: 'assets/images/list/32.jpg',
                views: 9999
            },

        ];
    }
}
