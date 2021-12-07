import {Component, Input} from '@angular/core';

@Component({
    selector: 'custom-product-list4',
    templateUrl: './custom-product-list4.component.html',
    styleUrls: ['./custom-product-list4.component.scss'],
})
export class CustomProductList4Component {
    @Input() list: Array<any>;

    constructor() {
    }


}
