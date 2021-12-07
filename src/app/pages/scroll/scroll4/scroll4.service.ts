import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class Scroll4Service {
    getUser(): any {
        return {
            avatar: 'assets/images/avatar/5.jpg',
            name: 'Jasmine',
            location: 'Tokyo • Kanda, Chiyoda',
            follows: 1899,
            following: 9876,
            photos: ['assets/images/list/22.jpg', 'assets/images/list/23.jpg',
                'assets/images/list/24.jpg', 'assets/images/list/25.jpg', 'assets/images/list/26.jpg',
                'assets/images/list/27.jpg', 'assets/images/list/28.jpg',
                'assets/images/list/29.jpg', 'assets/images/list/30.jpg',
                'assets/images/list/31.jpg', 'assets/images/list/32.jpg', 'assets/images/list/33.jpg'],
            favorite: ['assets/images/list/33.jpg', 'assets/images/list/32.jpg',
                'assets/images/list/31.jpg', 'assets/images/list/30.jpg', 'assets/images/list/29.jpg'],
            friends: ['assets/images/avatar/1.jpg', 'assets/images/avatar/2.jpg',
                'assets/images/avatar/3.jpg', 'assets/images/avatar/4.jpg', 'assets/images/avatar/5.jpg'],
        };
    }
}
