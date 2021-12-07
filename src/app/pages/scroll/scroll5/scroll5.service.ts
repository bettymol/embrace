import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class Scroll5Service {

    getUser() {
        return {
            avatar: 'assets/images/avatar/5.jpg',
            name: 'Elizabeth',
            intro: 'New York, USA',
            back: 'assets/images/profile/5.jpg'
        };
    }

    getList(): Array<any> {
        return [
            {
                active: false,
                img: 'assets/images/list/55.jpg',
                title: 'Samantha',
                date: '1 days ago',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit😁😄😋😜.',
            },
            {
                active: false,
                img: 'assets/images/list/54.jpg',
                title: 'Victoria',
                date: '2 days ago',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit😁😄😋😜.',
            },
            {
                active: false,
                img: 'assets/images/list/53.jpg',
                title: 'Gabriella',
                date: '3 days ago',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit😁😄😋😜.',
            },
        ];
    }
}
