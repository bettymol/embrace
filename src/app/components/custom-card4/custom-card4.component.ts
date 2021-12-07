import {Component, Input} from '@angular/core';

@Component({
    selector: 'custom-card4',
    templateUrl: './custom-card4.component.html',
    styleUrls: ['./custom-card4.component.scss'],
})
export class CustomCard4Component {
    @Input() list: Array<any>;

    constructor() {
    }

}
