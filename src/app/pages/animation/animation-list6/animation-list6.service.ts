import {Injectable} from '@angular/core';
import {AnimationListModel} from '../../../components/custom-animation-list1/animation-list.model';

@Injectable({providedIn: 'root'})
export class AnimationList6Service {
    getList(): Array<AnimationListModel> {
        return [
            {name: 'Barbell', price: 99, img: 'assets/images/list/45.jpg', avatar: 'assets/images/avatar/5.jpg'},
            {name: 'Bent', price: 199, img: 'assets/images/list/44.jpg', avatar: 'assets/images/avatar/6.jpg'},
            {name: 'Wide-Grip', price: 299, img: 'assets/images/list/43.jpg', avatar: 'assets/images/avatar/7.jpg'},
            {name: 'Standing', price: 399, img: 'assets/images/list/42.jpg', avatar: 'assets/images/avatar/8.jpg'},
            {name: 'Wide-Grip', price: 99, img: 'assets/images/list/41.jpg', avatar: 'assets/images/avatar/4.jpg'},
            {name: 'Reverse-Grip', price: 199, img: 'assets/images/list/40.jpg', avatar: 'assets/images/avatar/3.jpg'},
        ];
    }
}
