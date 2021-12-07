import {Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';
import {MenuController} from '@ionic/angular';

@Component({
    selector: 'custom-header',
    templateUrl: './custom-header.component.html',
    styleUrls: ['./custom-header.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class CustomHeaderComponent {
    isActive = false;
    @Input() title = 'Home';
    @Input() hidden = true;
    @Output() onSearch = new EventEmitter();
    @Input() hiddenAbout = true;

    constructor(private menu: MenuController) {
    }

    toggle() {
        this.isActive = !this.isActive;
    }

    search(event) {
        this.onSearch.emit(event);
    }

    onOpen() {
        this.menu.enable(true, 'custom');
        this.menu.open('custom');
    }
}
