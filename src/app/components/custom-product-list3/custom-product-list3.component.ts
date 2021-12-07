import {Component, Input} from '@angular/core';
import {ProductModel} from '../custom-product-list/product.model';

@Component({
  selector: 'custom-product-list3',
  templateUrl: './custom-product-list3.component.html',
  styleUrls: ['./custom-product-list3.component.scss'],
})
export class CustomProductList3Component {
  @Input() list: Array<ProductModel>;
  constructor() { }

  ngOnInit() {}

}
