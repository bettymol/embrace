import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class Scroll2Service {
    getList(): Array<any> {
        return [
            {
                avatar: 'assets/images/avatar/1.jpg',
                name: 'Jasmine',
                date: '1 days ago',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit😁😄😋😜.',
                img: 'assets/images/list/51.jpg',
                heart: 13,
                chat: 5
            },
            {
                avatar: 'assets/images/avatar/2.jpg',
                name: 'Katherine',
                date: '2 days ago',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit😷🚄🚈.',
                img: 'assets/images/list/52.jpg',
                heart: 9,
                chat: 3
            },
            {
                avatar: 'assets/images/avatar/3.jpg',
                name: 'Madeline',
                date: '3 days ago',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit🚗🚴😗.',
                img: 'assets/images/list/53.jpg',
                heart: 7,
                chat: 6
            },
            {
                avatar: 'assets/images/avatar/4.jpg',
                name: 'Madelyn',
                date: '4 days ago',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit😁😄😋😜.',
                img: 'assets/images/list/54.jpg',
                heart: 9,
                chat: 2
            },
            {
                avatar: 'assets/images/avatar/5.jpg',
                name: 'Stephanie',
                date: '5 days ago',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit😁😄😋😜.',
                img: 'assets/images/list/55.jpg',
                heart: 23,
                chat: 12
            },
        ];
    }
}
