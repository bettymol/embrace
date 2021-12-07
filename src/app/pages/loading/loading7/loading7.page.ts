import {Component, OnInit} from '@angular/core';
import {Loading7Service} from './loading7.service';

@Component({
    selector: 'app-loading7',
    templateUrl: './loading7.page.html',
    styleUrls: ['./loading7.page.scss'],
})
export class Loading7Page implements OnInit {
    list: Array<any>;
    isLoading = true;

    constructor(private service: Loading7Service) {
        this.list = this.service.getList();
    }

    ngOnInit() {
    }

    onToggle() {
        this.isLoading = !this.isLoading;
    }

}
