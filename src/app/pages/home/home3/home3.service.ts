import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class Home3Service {

    getBannerList(): Array<string> {
        return [
            'assets/images/list/11.jpg',
            'assets/images/list/12.jpg',
            'assets/images/list/13.jpg'
        ];
    }

    getList() {
        return [
            {name: 'Balance Body', img: 'assets/images/list/14.jpg'},
            {name: 'Nutrition Plan', img: 'assets/images/list/15.jpg'},
            {name: 'Balance Body', img: 'assets/images/list/16.jpg'},
            {name: 'Balance Body', img: 'assets/images/list/17.jpg'},
        ];
    }

}
