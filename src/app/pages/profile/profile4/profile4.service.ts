import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class Profile4Service {
    getList(): Array<any> {
        return [
            {icon: 'cash', name: 'Cash'},
            {icon: 'clipboard', name: 'Orders'},
            {icon: 'card', name: 'Card'},
            {icon: 'basket', name: 'Bag'}
        ];
    }

    getList1(): Array<any> {
        return [
            {icon: 'card', name: 'Card'},
            {icon: 'cash', name: 'Cash'},
            {icon: 'pricetags', name: 'Price'},
            {icon: 'wallet', name: 'Wallet'}
        ];
    }

    getList2(): Array<any> {
        return [
            {icon: 'thumbs-up', name: 'Up'},
            {icon: 'reverse-camera', name: 'Camera'},
            {icon: 'photos', name: 'Photos'},
            {icon: 'heart', name: 'Heart'}
        ];
    }
}
