import {Component, Input} from '@angular/core';
import {CardModel} from './card.model';

@Component({
    selector: 'custom-card1',
    templateUrl: './custom-card1.component.html',
    styleUrls: ['./custom-card1.component.scss'],
})
export class CustomCard1Component {
    @Input() list: Array<CardModel>;

    constructor() {
    }

}
