import {Injectable} from '@angular/core';
import {ProductModel} from '../../../components/custom-product-list/product.model';

@Injectable({providedIn: 'root'})
export class ListService {
    getList(): Array<ProductModel> {
        return [
            {name: 'Barbell', price: 99, img: 'assets/images/list/10.jpg'},
            {name: 'Bent Barbell', price: 199, img: 'assets/images/list/11.jpg'},
            {name: 'Pull-Up', price: 299, img: 'assets/images/list/12.jpg'},
            {name: 'Standing', price: 399, img: 'assets/images/list/13.jpg'},
            {name: 'Wide-Grip', price: 99, img: 'assets/images/list/14.jpg'},
            {name: 'Reverse-Grip', price: 199, img: 'assets/images/list/15.jpg'},
        ];
    }
}
