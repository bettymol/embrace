import {Component, Input} from '@angular/core';

@Component({
    selector: 'custom-list-reorder',
    templateUrl: './custom-list-reorder.component.html',
    styleUrls: ['./custom-list-reorder.component.scss'],
})
export class CustomListReorderComponent {
    @Input() list: Array<any>;

    constructor() {
    }

    doReorder(ev: any) {
        console.log('Dragged from index', ev.detail.from, 'to', ev.detail.to);
        ev.detail.complete();
    }

}
