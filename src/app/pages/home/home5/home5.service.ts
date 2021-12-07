import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class Home5Service {

    getBannerList(): Array<string> {
        return [
            'assets/images/list/25.jpg',
            'assets/images/list/26.jpg',
            'assets/images/list/28.jpg'
        ];
    }

    getMList() {
        return [
            {icon: 'boat', name: 'boat'},
            {icon: 'aperture', name: 'support'},
            {icon: 'cafe', name: 'cafe'},
            {icon: 'globe', name: 'help'},
            {icon: 'notifications', name: 'notice'},
            {icon: 'time', name: 'time'}
        ];
    }

    getList() {
        return [
            {title: 'Split Squat', img: 'assets/images/list/30.jpg'},
            {title: 'Deadlift', img: 'assets/images/list/31.jpg'},
            {title: 'Romanian', img: 'assets/images/list/32.jpg'},
            {title: 'Bulgarian', img: 'assets/images/list/33.jpg'},
            {title: 'Bulgarian', img: 'assets/images/list/34.jpg'},
            {title: 'Romanian', img: 'assets/images/list/35.jpg'},
        ];
    }

    getNewList() {
        return [
            {title: 'Seated cable row', img: 'assets/images/list/38.jpg'},
            {title: 'Side Lateral Raise', img: 'assets/images/list/39.jpg'},
            {title: 'Seated Barbell Military Press', img: 'assets/images/list/40.jpg'},
            {title: 'RGerman Volume Training', img: 'assets/images/list/41.jpg'}
        ];
    }

}
