import {Component, Input} from '@angular/core';
import {AnimationListModel} from '../custom-animation-list1/animation-list.model';

@Component({
    selector: 'custom-animation-list3',
    templateUrl: './custom-animation-list3.component.html',
    styleUrls: ['./custom-animation-list3.component.scss'],
})
export class CustomAnimationList3Component {
    @Input() animationClassName: string;
    @Input() list: Array<AnimationListModel>;
    iconList = [
        {name: 'heart', color: 'secondary'},
        {name: 'ios-cart', color: 'warning'},
        {name: 'star', color: 'secondary'},
        {name: 'flame', color: 'success'},
        {name: 'happy', color: 'light'}
    ];

    constructor() {
    }


}
