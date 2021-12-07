import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class Scroll3Service {
    getList(): Array<any> {
        return [
            {
                avatar: 'assets/images/avatar/5.jpg',
                name: 'Jasmine',
                date: '1 days ago',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit😁😄😋😜.',
                slides: ['assets/images/list/45.jpg', 'assets/images/list/44.jpg',
                    'assets/images/list/43.jpg', 'assets/images/list/42.jpg', 'assets/images/list/41.jpg'],
                heart: 13,
                chat: 5
            },
            {
                avatar: 'assets/images/avatar/6.jpg',
                name: 'Katherine',
                date: '2 days ago',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit😷🚄🚈.',
                slides: ['assets/images/list/40.jpg', 'assets/images/list/39.jpg',
                    'assets/images/list/38.jpg', 'assets/images/list/35.jpg', 'assets/images/list/34.jpg'],
                heart: 9,
                chat: 3
            },
            {
                avatar: 'assets/images/avatar/7.jpg',
                name: 'Madeline',
                date: '3 days ago',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit🚗🚴😗.',
                slides: ['assets/images/list/33.jpg', 'assets/images/list/32.jpg',
                    'assets/images/list/31.jpg', 'assets/images/list/30.jpg', 'assets/images/list/29.jpg'],
                heart: 7,
                chat: 6
            },
            {
                avatar: 'assets/images/avatar/8.jpg',
                name: 'Madelyn',
                date: '4 days ago',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit😁😄😋😜.',
                slides: ['assets/images/list/28.jpg', 'assets/images/list/27.jpg',
                    'assets/images/list/26.jpg', 'assets/images/list/25.jpg', 'assets/images/list/24.jpg'],
                heart: 9,
                chat: 2
            },
            {
                avatar: 'assets/images/avatar/9.jpg',
                name: 'Stephanie',
                date: '5 days ago',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit😁😄😋😜.',
                slides: ['assets/images/list/23.jpg', 'assets/images/list/22.jpg',
                    'assets/images/list/21.jpg', 'assets/images/list/20.jpg', 'assets/images/list/19.jpg'],
                heart: 23,
                chat: 12
            },
        ];
    }
}
