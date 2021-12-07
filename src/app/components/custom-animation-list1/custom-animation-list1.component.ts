import {Component, Input} from '@angular/core';
import {AnimationListModel} from './animation-list.model';

@Component({
    selector: 'custom-animation-list1',
    templateUrl: './custom-animation-list1.component.html',
    styleUrls: ['./custom-animation-list1.component.scss'],
})
export class CustomAnimationList1Component {
    @Input() animationClassName: string;
    @Input() list: Array<AnimationListModel>;
    sList = [1, 2, 3, 4, 5];

    constructor() {
    }

}
