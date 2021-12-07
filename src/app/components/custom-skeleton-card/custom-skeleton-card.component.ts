import {Component, Input} from '@angular/core';

@Component({
    selector: 'custom-skeleton-card',
    templateUrl: './custom-skeleton-card.component.html',
    styleUrls: ['./custom-skeleton-card.component.scss'],
})
export class CustomSkeletonCardComponent {
    list = [1];
    wList = [1, 2, 3];

    @Input() set rows(val: number) {
        this.list = Array.from({length: val}, (v, i) => i);
    }

    constructor() {
    }


}
