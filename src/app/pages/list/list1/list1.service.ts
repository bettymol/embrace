import {Injectable} from '@angular/core';
import {ProductModel} from '../../../components/custom-product-list/product.model';

@Injectable({providedIn: 'root'})
export class List1Service {
    getList(): Array<ProductModel> {
        return [
            {name: 'Barbell', price: 99, img: 'assets/images/list/17.jpg'},
            {name: 'Bent Barbell', price: 199, img: 'assets/images/list/18.jpg'},
            {name: 'Wide-Grip', price: 299, img: 'assets/images/list/19.jpg'},
            {name: 'Standing', price: 399, img: 'assets/images/list/20.jpg'},
            {name: 'Wide-Grip', price: 99, img: 'assets/images/list/21.jpg'},
            {name: 'Reverse-Grip', price: 199, img: 'assets/images/list/22.jpg'},
        ];
    }
}
