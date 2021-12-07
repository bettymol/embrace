import {Component, Input} from '@angular/core';

@Component({
    selector: 'custom-card2',
    templateUrl: './custom-card2.component.html',
    styleUrls: ['./custom-card2.component.scss'],
})
export class CustomCard2Component {
    @Input() list: Array<any>;

    constructor() {
    }

}
