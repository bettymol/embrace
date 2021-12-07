import {Component, OnInit} from '@angular/core';


@Component({
    selector: 'app-list-virtual-scroll',
    templateUrl: './list-virtual-scroll.page.html',
    styleUrls: ['./list-virtual-scroll.page.scss'],
})
export class ListVirtualScrollPage implements OnInit {
    items: any[] = [];
    lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
        'seddo eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco ' +
        'laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit ' +
        'in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,' +
        ' sunt in culpa qui officia deserunt mollit anim id est laborum.';
    names = [
        {
            name: 'Walker',
            date: '01-03-2019',
            avatar: 'assets/images/avatar/1.jpg',
            title: 'Flat Barbell or Dumbbell Bench Press',
            img: 'assets/images/list/42.jpg'
        },
        {
            name: 'Perez',
            date: '06-03-2019',
            avatar: 'assets/images/avatar/2.jpg',
            title: 'Flat Dumbbell Flyes',
            img: 'assets/images/list/30.jpg'
        },
        {
            name: 'Sancho',
            date: '08-08-2019',
            avatar: 'assets/images/avatar/3.jpg',
            title: 'Pec Deck Machine',
            img: 'assets/images/list/31.jpg'
        },
        {
            name: 'Green',
            date: '09-02-2019',
            avatar: 'assets/images/avatar/4.jpg',
            title: 'Decline Dumbbell Flyes',
            img: 'assets/images/list/32.jpg'
        },
        {
            name: 'Adams',
            date: '18-08-2019',
            avatar: 'assets/images/avatar/5.jpg',
            title: 'Decline Chest Press Machine',
            img: 'assets/images/list/33.jpg'
        },
        {
            name: 'Grace',
            date: '18-08-2019',
            avatar: 'assets/images/avatar/5.jpg',
            title: 'Chest Press Machine',
            img: 'assets/images/list/34.jpg'
        },
        {
            name: 'Brooklyn',
            date: '18-08-2019',
            avatar: 'assets/images/avatar/5.jpg',
            title: 'Decline Chest Press Machine',
            img: 'assets/images/list/35.jpg'
        },

    ];

    constructor() {
        for (let i = 0; i < 1000; i++) {
            const name = this.names[i % 7];
            this.items.push({
                name: i + ' - ' + name.name,
                img: name.img,
                content: this.lorem.substring(0, Math.random() * (this.lorem.length - 100) + 100)
            });
        }
    }

    ngOnInit() {
    }

}
