import {Component, Input} from '@angular/core';

@Component({
    selector: 'custom-scroll5',
    templateUrl: './custom-scroll5.component.html',
    styleUrls: ['./custom-scroll5.component.scss'],
})
export class CustomScroll5Component {
    @Input() user: any;
    @Input() list: any;
    active = false;

    constructor() {
    }
}
