import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class ListToggleService {
    lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
        'seddo eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco ' +
        'laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit ';

    getList(): Array<any> {
        return [
            {
                id: 1,
                title: 'Laila',
                subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                img: 'assets/images/avatar/2.jpg',
                checked: true
            },
            {
                id: 2,
                title: 'Kylee',
                subTitle: 'laboris nisi ut aliquip ex ea commodo consequat.',
                img: 'assets/images/avatar/3.jpg',
                checked: true
            },
            {
                id: 3,
                title: 'Jacqueline',
                subTitle: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco',
                img: 'assets/images/avatar/4.jpg',
                checked: true
            },
            {
                id: 4,
                title: 'Sienna',
                subTitle: 'seddo eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                img: 'assets/images/avatar/11.jpg',
                checked: false
            },
            {
                id: 5,
                title: 'Miranda',
                subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                img: 'assets/images/avatar/6.jpg',
                checked: true
            },
            {
                id: 6,
                title: 'Sabrina',
                subTitle: 'seddo eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                img: 'assets/images/avatar/7.jpg',
                checked: false
            },
            {
                id: 7,
                title: 'Julianna',
                subTitle: 'Lorem ipsum dolor sit amet, elit dolore magna aliqua.',
                img: 'assets/images/avatar/8.jpg',
                checked: true
            },
            {
                id: 8,
                title: 'Eliana',
                subTitle: 'seddo eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                img: 'assets/images/avatar/9.jpg',
                checked: true
            }
        ];
    }
}
