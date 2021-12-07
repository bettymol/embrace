import {Component, OnInit} from '@angular/core';
import {ProductModel} from '../../../components/custom-product-list/product.model';
import {List2Service} from './list2.service';

@Component({
    selector: 'app-list2',
    templateUrl: './list2.page.html',
    styleUrls: ['./list2.page.scss'],
})
export class List2Page implements OnInit {
    list: Array<ProductModel>;
    gList: Array<ProductModel>;

    constructor(private service: List2Service) {
        this.gList = this.service.getList();
        this.list = this.gList;
    }


    ngOnInit() {
    }

    loadData(event) {
        setTimeout(() => {
            this.gList = [...this.gList, ...this.service.getList()];
            this.list = this.gList;
            event.target.complete();
            if (this.list.length === 500) {
                event.target.disabled = true;
            }
        }, 2000);
    }

    onSearch(event) {
        const key = event.target.value.toLowerCase();
        this.list = this.gList.filter(p => p.name.toLowerCase().includes(key));
    }

}
