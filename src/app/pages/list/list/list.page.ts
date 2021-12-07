import {Component, OnInit} from '@angular/core';
import {ProductModel} from '../../../components/custom-product-list/product.model';
import {ListService} from './list.service';

@Component({
    selector: 'app-list',
    templateUrl: './list.page.html',
    styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
    gList: Array<ProductModel>;
    list: Array<ProductModel>;
    pageList = [1, 2, 3, 4, 5];
    constructor(private service: ListService) {
        this.gList = this.service.getList();
        this.list = this.gList;
    }

    ngOnInit() {
    }

    onSearch(event) {
        const key = event.target.value.toLowerCase();
        this.list = this.gList.filter(p => p.name.toLowerCase().includes(key));
    }

    onPage(item) {
    }

}
