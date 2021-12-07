import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'custom-list-toggle',
    templateUrl: './custom-list-toggle.component.html',
    styleUrls: ['./custom-list-toggle.component.scss'],
})
export class CustomListToggleComponent {
    @Input() list: Array<any>;
    @Output() onToggle = new EventEmitter();

    constructor() {
    }

    change(item) {
        this.onToggle.emit(item);
    }
}
