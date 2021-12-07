import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class List4Service {
    getList(): Array<any> {
        return [
            {
                name: 'Walker',
                date: '01-03-2019',
                avatar: 'assets/images/avatar/1.jpg',
                title: 'Flat Barbell or Dumbbell Bench Press',
                img: 'assets/images/list/15.jpg'
            },
            {
                name: 'Perez',
                date: '06-03-2019',
                avatar: 'assets/images/avatar/2.jpg',
                title: 'Flat Dumbbell Flyes',
                img: 'assets/images/list/16.jpg'
            },
            {
                name: 'Sancho',
                date: '08-08-2019',
                avatar: 'assets/images/avatar/3.jpg',
                title: 'Pec Deck Machine',
                img: 'assets/images/list/17.jpg'
            },
            {
                name: 'Green',
                date: '09-02-2019',
                avatar: 'assets/images/avatar/4.jpg',
                title: 'Decline Dumbbell Flyes',
                img: 'assets/images/list/18.jpg'
            },
            {
                name: 'Adams',
                date: '18-08-2019',
                avatar: 'assets/images/avatar/5.jpg',
                title: 'Decline Chest Press Machine',
                img: 'assets/images/list/19.jpg'
            },

        ];
    }
}
