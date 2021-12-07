import {Component, Input} from '@angular/core';
import {ToastProvider} from '../../shared/providers';

@Component({
    selector: 'custom-list-sliding',
    templateUrl: './custom-list-sliding.component.html',
    styleUrls: ['./custom-list-sliding.component.scss'],
})
export class CustomListSlidingComponent {
    @Input() list: Array<any>;

    constructor(private toastProvider: ToastProvider) {
    }

    onFavorite(item) {
        this.toastProvider.show('Favorite');
    }

    onDel(item) {
        this.list = this.list.filter(s => s.name !== item.name);
    }
}
