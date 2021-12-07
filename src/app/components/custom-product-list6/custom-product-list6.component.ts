import {Component, Input} from '@angular/core';

@Component({
    selector: 'custom-product-list6',
    templateUrl: './custom-product-list6.component.html',
    styleUrls: ['./custom-product-list6.component.scss'],
})
export class CustomProductList6Component {
    @Input() list: Array<any>;

    constructor() {
    }


}
