import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class Profile5Service {
    getList(): Array<any> {
        return [
            {avatar: 'assets/images/avatar/1.jpg', name: 'Grace', date: 'October 23, 2019', img: 'assets/images/list/1.jpg'},
            {avatar: 'assets/images/avatar/2.jpg', name: 'Lillian', date: 'October 24, 2019', img: 'assets/images/list/2.jpg'},
            {avatar: 'assets/images/avatar/3.jpg', name: 'Kimberly', date: 'October 25, 2019', img: 'assets/images/list/3.jpg'},
            {avatar: 'assets/images/avatar/4.jpg', name: 'Jessica', date: 'October 26, 2019', img: 'assets/images/list/4.jpg'},
        ];
    }
}
