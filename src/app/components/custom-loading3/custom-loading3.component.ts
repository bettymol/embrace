import {Component, Input} from '@angular/core';

@Component({
    selector: 'custom-loading3',
    templateUrl: './custom-loading3.component.html',
    styleUrls: ['./custom-loading3.component.scss'],
})
export class CustomLoading3Component {
    @Input() list: Array<any>;

    constructor() {
    }

}
