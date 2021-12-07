import {Component, Input} from '@angular/core';

@Component({
    selector: 'custom-loading5',
    templateUrl: './custom-loading5.component.html',
    styleUrls: ['./custom-loading5.component.scss'],
})
export class CustomLoading5Component {
    @Input() list: Array<any>;

    constructor() {
    }

}
