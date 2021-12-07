import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class Loading2Service {
    getList(): Array<any> {
        return [
            {
                name: 'Walker',
                date: '01-03-2019',
                avatar: 'assets/images/avatar/1.jpg',
                title: 'Flat Barbell or Dumbbell Bench Press',
                img: 'assets/images/list/35.jpg'
            },
            {
                name: 'Perez',
                date: '06-03-2019',
                avatar: 'assets/images/avatar/2.jpg',
                title: 'Flat Dumbbell Flyes',
                img: 'assets/images/list/38.jpg'
            },
            {
                name: 'Sancho',
                date: '08-08-2019',
                avatar: 'assets/images/avatar/3.jpg',
                title: 'Pec Deck Machine',
                img: 'assets/images/list/39.jpg'
            },
            {
                name: 'Green',
                date: '09-02-2019',
                avatar: 'assets/images/avatar/4.jpg',
                title: 'Decline Dumbbell Flyes',
                img: 'assets/images/list/40.jpg'
            },
            {
                name: 'Adams',
                date: '18-08-2019',
                avatar: 'assets/images/avatar/5.jpg',
                title: 'Decline Chest Press Machine',
                img: 'assets/images/list/41.jpg'
            },
            {
                name: 'Grace',
                date: '18-08-2019',
                avatar: 'assets/images/avatar/6.jpg',
                title: 'Chest Press Machine',
                img: 'assets/images/list/42.jpg'
            },
            {
                name: 'Brooklyn',
                date: '18-08-2019',
                avatar: 'assets/images/avatar/7.jpg',
                title: 'Decline Chest Press Machine',
                img: 'assets/images/list/43.jpg'
            },
            {
                name: 'Brooklyn',
                date: '18-08-2019',
                avatar: 'assets/images/avatar/8.jpg',
                title: 'Decline Chest Press Machine',
                img: 'assets/images/list/44.jpg'
            },

        ];
    }
}
