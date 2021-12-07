import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ProductModel} from './product.model';

@Component({
    selector: 'custom-product-list',
    templateUrl: './custom-product-list.component.html',
    styleUrls: ['./custom-product-list.component.scss'],
})
export class CustomProductListComponent {
    @Input() list: Array<ProductModel>;
    @Output() onCart = new EventEmitter();

    constructor() {
    }

    onAdd(item: ProductModel, event: any) {
        this.onCart.emit(event);
    }

}
