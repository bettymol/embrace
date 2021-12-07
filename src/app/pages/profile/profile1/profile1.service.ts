import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class Profile1Service {
    getList(): Array<any> {
        return [
            {icon: 'podium', name: 'Order'},
            {icon: 'notifications-outline', name: 'Notice'},
            {icon: 'card', name: 'Pay'},
            {icon: 'basket', name: 'Bag'},
            {icon: 'flame', name: 'Tops'},
            {icon: 'heart', name: 'Wish List'},
            {icon: 'pricetag', name: 'New'},
            {icon: 'md-person', name: 'Login'},
            {icon: 'help-circle-outline', name: 'Help'},
        ];
    }
}
