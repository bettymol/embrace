import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MenuController} from '@ionic/angular';

@Component({
    selector: 'custom-header1',
    templateUrl: './custom-header1.component.html',
    styleUrls: ['./custom-header1.component.scss'],
})
export class CustomHeader1Component {
    isActive = false;
    @Input() title = 'Home';
    @Output() onSearch = new EventEmitter();

    constructor(private menu: MenuController) {
    }

    toggle() {
        this.isActive = !this.isActive;
    }

    search(event) {
        this.onSearch.emit(event);
    }

    onCart() {
        this.menu.enable(true, 'search');
        this.menu.open('search');
    }
}
