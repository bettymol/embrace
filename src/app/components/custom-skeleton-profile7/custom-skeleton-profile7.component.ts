import {Component, Input} from '@angular/core';

@Component({
    selector: 'custom-skeleton-profile7',
    templateUrl: './custom-skeleton-profile7.component.html',
    styleUrls: ['./custom-skeleton-profile7.component.scss'],
})
export class CustomSkeletonProfile7Component {
    @Input() user: any;
    @Input() fList: any;
    img = 'assets/images/profile/6.jpg';
    constructor() {
    }
}
