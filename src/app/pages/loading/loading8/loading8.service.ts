import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class Loading8Service {
    getList(): Array<any> {
        return [
            {
                name: 'Hot',
                title: 'Views',
                icon: 'eye',
                list: [
                    'assets/images/list/10.jpg',
                    'assets/images/list/11.jpg',
                    'assets/images/list/12.jpg',
                    'assets/images/list/13.jpg',
                    'assets/images/list/14.jpg',
                    'assets/images/list/15.jpg',
                ]
            },
            {
                name: 'Recommend',
                title: 'Date',
                icon: 'podium',
                list: [
                    'assets/images/list/21.jpg',
                    'assets/images/list/22.jpg',
                    'assets/images/list/23.jpg',
                    'assets/images/list/24.jpg',
                    'assets/images/list/25.jpg',
                    'assets/images/list/26.jpg',
                ]
            },
        ];
    }
}
