import {Component, OnInit} from '@angular/core';
import {AlertProvider} from '../../../shared/providers';
import {ListToggleService} from './list-toggle.service';

@Component({
    selector: 'app-list-toggle',
    templateUrl: './list-toggle.page.html',
    styleUrls: ['./list-toggle.page.scss'],
})
export class ListTogglePage implements OnInit {
    list: Array<any>;

    constructor(private alertProvider: AlertProvider,
                private service: ListToggleService) {
        this.list = this.service.getList();
    }

    ngOnInit() {
    }

    onToggle(event) {
        //this.alertProvider.presentOk(JSON.stringify(event));
    }
}
