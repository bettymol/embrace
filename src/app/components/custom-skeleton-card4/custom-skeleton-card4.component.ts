import {Component, Input} from '@angular/core';

@Component({
    selector: 'custom-skeleton-card4',
    templateUrl: './custom-skeleton-card4.component.html',
    styleUrls: ['./custom-skeleton-card4.component.scss'],
})
export class CustomSkeletonCard4Component {
    @Input() list: Array<any>;

    constructor() {
    }

}
