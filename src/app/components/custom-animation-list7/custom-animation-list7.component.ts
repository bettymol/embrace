import {Component, Input} from '@angular/core';
import {AnimationListModel} from '../custom-animation-list1/animation-list.model';

@Component({
    selector: 'custom-animation-list7',
    templateUrl: './custom-animation-list7.component.html',
    styleUrls: ['./custom-animation-list7.component.scss'],
})
export class CustomAnimationList7Component {
    @Input() animationClassName: string;
    @Input() list: Array<AnimationListModel>;

    constructor() {
    }

}
