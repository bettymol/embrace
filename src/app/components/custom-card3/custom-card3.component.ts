import {Component, Input} from '@angular/core';

@Component({
    selector: 'custom-card3',
    templateUrl: './custom-card3.component.html',
    styleUrls: ['./custom-card3.component.scss'],
})
export class CustomCard3Component {
    @Input() list: Array<any>;

    constructor() {
    }
}
