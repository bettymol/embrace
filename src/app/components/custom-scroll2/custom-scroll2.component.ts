import {Component, Input} from '@angular/core';

@Component({
    selector: 'custom-scroll2',
    templateUrl: './custom-scroll2.component.html',
    styleUrls: ['./custom-scroll2.component.scss'],
})
export class CustomScroll2Component {
    @Input() list: any;

    constructor() {
    }
}
