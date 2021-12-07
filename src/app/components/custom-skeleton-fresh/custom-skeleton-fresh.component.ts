import {Component, Input} from '@angular/core';
import {CardModel} from '../custom-card1/card.model';

@Component({
    selector: 'custom-skeleton-fresh',
    templateUrl: './custom-skeleton-fresh.component.html',
    styleUrls: ['./custom-skeleton-fresh.component.scss'],
})
export class CustomSkeletonFreshComponent {
    @Input() list: Array<CardModel>;

    constructor() {
    }

}
