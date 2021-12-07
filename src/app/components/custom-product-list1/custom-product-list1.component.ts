import {Component, Input} from '@angular/core';
import {ProductModel} from '../custom-product-list/product.model';

@Component({
  selector: 'custom-product-list1',
  templateUrl: './custom-product-list1.component.html',
  styleUrls: ['./custom-product-list1.component.scss'],
})
export class CustomProductList1Component {
  @Input() list: Array<ProductModel>;
  constructor() { }

}
