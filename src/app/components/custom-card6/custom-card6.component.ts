import {Component, Input} from '@angular/core';

@Component({
    selector: 'custom-card6',
    templateUrl: './custom-card6.component.html',
    styleUrls: ['./custom-card6.component.scss'],
})
export class CustomCard6Component {
    @Input() list: Array<any>;

    constructor() {
    }
}
