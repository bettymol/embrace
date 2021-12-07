import {Component, Input} from '@angular/core';

@Component({
    selector: 'custom-profile2',
    templateUrl: './custom-profile2.component.html',
    styleUrls: ['./custom-profile2.component.scss'],
})
export class CustomProfile2Component {
    @Input() user: any;
    @Input() list: any;

    constructor() {
    }

}
