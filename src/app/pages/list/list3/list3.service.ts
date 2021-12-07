import {Injectable} from '@angular/core';
import {ProductModel} from '../../../components/custom-product-list/product.model';

@Injectable({providedIn: 'root'})
export class List3Service {
    getList(): Array<ProductModel> {
        return [
            {name: 'Barbell Deadlift', price: 99, img: 'assets/images/list/34.jpg'},
            {name: 'Bent Barbell Row', price: 199, img: 'assets/images/list/35.jpg'},
            {name: 'Wide-Grip Pull-Up', price: 299, img: 'assets/images/list/38.jpg'},
            {name: 'Standing T-Bar Row', price: 399, img: 'assets/images/list/25.jpg'},
            {name: 'Wide-Grip Seated Cable Row', price: 99, img: 'assets/images/list/28.jpg'},
            {name: 'Reverse-Grip Smith Machine Row', price: 199, img: 'assets/images/list/5.jpg'},
        ];
    }
}
