import {Component, Input} from '@angular/core';
import {CheckModel} from './check.model';

@Component({
    selector: 'custom-list-checkbox',
    templateUrl: './custom-list-checkbox.component.html',
    styleUrls: ['./custom-list-checkbox.component.scss'],
})
export class CustomListCheckboxComponent {
    @Input() list: Array<CheckModel>;

    constructor() {
    }

}
