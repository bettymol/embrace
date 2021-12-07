import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class Profile6Service {
    getList(): Array<any> {
        return [
            {
                title: 'Body weight squats',
                cate: 'Squats',
                date: ' July 21, 2029',
                content: '73 Photos + 11 videos',
                img: 'assets/images/list/31.jpg',
            },
            {
                title: 'Walking lunges',
                cate: 'Walking',
                date: ' July 17, 2029',
                content: '13 Photos + 5 videos',
                img: 'assets/images/list/32.jpg',
            },
            {
                title: 'Pushups',
                cate: 'Pushups',
                date: ' July 26, 2029',
                content: ' 8 Photos + 2 videos',
                img: 'assets/images/list/33.jpg',
            }];
    }
}
