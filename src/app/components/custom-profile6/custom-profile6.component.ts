import {Component, Input} from '@angular/core';

@Component({
    selector: 'custom-profile6',
    templateUrl: './custom-profile6.component.html',
    styleUrls: ['./custom-profile6.component.scss'],
})
export class CustomProfile6Component {
    @Input() user: any;
    @Input() list: any;

    constructor() {
    }
}
