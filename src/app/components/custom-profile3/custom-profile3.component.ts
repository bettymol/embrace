import {Component, Input} from '@angular/core';

@Component({
    selector: 'custom-profile3',
    templateUrl: './custom-profile3.component.html',
    styleUrls: ['./custom-profile3.component.scss'],
})
export class CustomProfile3Component {
    @Input() user: any;
    @Input() list: any;

    constructor() {
    }
}
