import {Injectable} from '@angular/core';
import {ProductModel} from '../../../components/custom-product-list/product.model';

@Injectable({providedIn: 'root'})
export class List2Service {
    getList(): Array<ProductModel> {
        return [
            {name: 'Barbell Deadlift', price: 99, img: 'assets/images/list/20.jpg'},
            {name: 'Bent Barbell Row', price: 199, img: 'assets/images/list/21.jpg'},
            {name: 'Wide-Grip Pull-Up', price: 299, img: 'assets/images/list/22.jpg'},
            {name: 'Standing T-Bar Row', price: 399, img: 'assets/images/list/23.jpg'},
            {name: 'Wide-Grip Seated Cable Row', price: 99, img: 'assets/images/list/24.jpg'},
            {name: 'Reverse-Grip Smith Machine Row', price: 199, img: 'assets/images/list/25.jpg'},
        ];
    }
}
