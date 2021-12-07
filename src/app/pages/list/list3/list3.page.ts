import { Component, OnInit } from '@angular/core';
import {ProductModel} from '../../../components/custom-product-list/product.model';
import {List3Service} from './list3.service';

@Component({
  selector: 'app-list3',
  templateUrl: './list3.page.html',
  styleUrls: ['./list3.page.scss'],
})
export class List3Page implements OnInit {
  list: Array<ProductModel>;

  constructor(private service: List3Service) {
    this.list = this.service.getList();
  }


  ngOnInit() {
  }

}
