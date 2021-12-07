import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-loading6',
    templateUrl: './loading6.page.html',
    styleUrls: ['./loading6.page.scss'],
})
export class Loading6Page implements OnInit {
    isLoading = true;

    constructor() {
    }

    ngOnInit() {
    }

    onToggle() {
        this.isLoading = !this.isLoading;
    }

}
