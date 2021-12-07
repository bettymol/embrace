import {Injectable} from '@angular/core';
import {AnimationListModel} from '../../../components/custom-animation-list1/animation-list.model';

@Injectable({providedIn: 'root'})
export class AnimationList3Service {
    getList(): Array<AnimationListModel> {
        return [
            {name: 'Barbell Deadlift', price: 99, img: 'assets/images/list/1.jpg', avatar: 'assets/images/avatar/5.jpg'},
            {name: 'Bent Barbell Row', price: 199, img: 'assets/images/list/2.jpg', avatar: 'assets/images/avatar/6.jpg'},
            {name: 'Wide-Grip Pull-Up', price: 299, img: 'assets/images/list/3.jpg', avatar: 'assets/images/avatar/7.jpg'},
            {name: 'Standing T-Bar Row', price: 399, img: 'assets/images/list/4.jpg', avatar: 'assets/images/avatar/8.jpg'},
            {name: 'Wide-Grip Seated Cable Row', price: 99, img: 'assets/images/list/5.jpg', avatar: 'assets/images/avatar/4.jpg'},
            {name: 'Reverse-Grip Smith Machine Row', price: 199, img: 'assets/images/list/6.jpg', avatar: 'assets/images/avatar/3.jpg'},
        ];
    }
}
