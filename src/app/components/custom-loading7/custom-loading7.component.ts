import {Component, Input} from '@angular/core';

@Component({
    selector: 'custom-loading7',
    templateUrl: './custom-loading7.component.html',
    styleUrls: ['./custom-loading7.component.scss'],
})
export class CustomLoading7Component {
    @Input() list: Array<any>;

    constructor() {
    }
}
