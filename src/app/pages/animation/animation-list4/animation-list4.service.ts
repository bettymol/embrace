import {Injectable} from '@angular/core';
import {AnimationListModel} from '../../../components/custom-animation-list1/animation-list.model';

@Injectable({providedIn: 'root'})
export class AnimationList4Service {
    getList(): Array<AnimationListModel> {
        return [
            {name: 'Barbell', price: 99, img: 'assets/images/list/30.jpg', avatar: 'assets/images/avatar/5.jpg'},
            {name: 'Bent Row', price: 199, img: 'assets/images/list/31.jpg', avatar: 'assets/images/avatar/6.jpg'},
            {name: 'Wide-Grip', price: 299, img: 'assets/images/list/32.jpg', avatar: 'assets/images/avatar/7.jpg'},
            {name: 'Standing Row', price: 399, img: 'assets/images/list/33.jpg', avatar: 'assets/images/avatar/8.jpg'},
            {name: 'Cable Row', price: 99, img: 'assets/images/list/34.jpg', avatar: 'assets/images/avatar/9.jpg'},
            {name: 'Smith Row', price: 199, img: 'assets/images/list/35.jpg', avatar: 'assets/images/avatar/1.jpg'},
            {name: 'Wide-Grip', price: 299, img: 'assets/images/list/40.jpg', avatar: 'assets/images/avatar/2.jpg'},
            {name: 'Standing Row', price: 399, img: 'assets/images/list/41.jpg', avatar: 'assets/images/avatar/3.jpg'},
            {name: 'Cable Row', price: 99, img: 'assets/images/list/38.jpg', avatar: 'assets/images/avatar/4.jpg'},
            {name: 'Smith Row', price: 199, img: 'assets/images/list/39.jpg', avatar: 'assets/images/avatar/10.jpg'},
        ];
    }
}
