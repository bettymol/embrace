import {Component, Input} from '@angular/core';

@Component({
    selector: 'custom-list-refresher',
    templateUrl: './custom-list-refresher.component.html',
    styleUrls: ['./custom-list-refresher.component.scss'],
})
export class CustomListRefresherComponent {
    @Input() list: Array<any>;

    constructor() {
    }
}
