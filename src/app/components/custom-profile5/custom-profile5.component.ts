import {Component, Input} from '@angular/core';

@Component({
    selector: 'custom-profile5',
    templateUrl: './custom-profile5.component.html',
    styleUrls: ['./custom-profile5.component.scss'],
})
export class CustomProfile5Component  {
    @Input() user: any;
    @Input() list: any;

    constructor() {
    }

    follow() {
    }
}
