import {Component, Input} from '@angular/core';
import {TravelModel} from './travel.model';

@Component({
  selector: 'custom-product-list5',
  templateUrl: './custom-product-list5.component.html',
  styleUrls: ['./custom-product-list5.component.scss'],
})
export class CustomProductList5Component  {
  @Input() list: Array<TravelModel>;
  constructor() { }


}
