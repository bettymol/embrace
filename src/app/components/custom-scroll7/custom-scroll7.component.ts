import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'custom-scroll7',
    templateUrl: './custom-scroll7.component.html',
    styleUrls: ['./custom-scroll7.component.scss'],
})
export class CustomScroll7Component {
    @Input() list: any;
    @Output() change = new EventEmitter<number>();

    constructor() {
    }

    onChange(event, item) {
        item.numbers = event;
        this.change.emit(event);
    }
}
