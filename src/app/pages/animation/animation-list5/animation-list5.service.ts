import {Injectable} from '@angular/core';
import {AnimationListModel} from '../../../components/custom-animation-list1/animation-list.model';

@Injectable({providedIn: 'root'})
export class AnimationList5Service {
    getList(): Array<AnimationListModel> {
        return [
            {name: 'Brianna', price: 99, img: 'assets/images/list/11.jpg', avatar: 'assets/images/avatar/5.jpg'},
            {name: 'Lauren', price: 199, img: 'assets/images/list/12.jpg', avatar: 'assets/images/avatar/6.jpg'},
            {name: 'Kaylee', price: 299, img: 'assets/images/list/11.jpg', avatar: 'assets/images/avatar/7.jpg'},
            {name: 'Allison', price: 399, img: 'assets/images/list/12.jpg', avatar: 'assets/images/avatar/8.jpg'},
            {name: 'Sofia', price: 99, img: 'assets/images/list/11.jpg', avatar: 'assets/images/avatar/4.jpg'},
            {name: 'Julia', price: 199, img: 'assets/images/list/12.jpg', avatar: 'assets/images/avatar/3.jpg'},
        ];
    }
}
