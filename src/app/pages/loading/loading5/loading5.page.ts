import {Component, OnInit} from '@angular/core';
import {Loading5Service} from './loading5.service';

@Component({
    selector: 'app-loading5',
    templateUrl: './loading5.page.html',
    styleUrls: ['./loading5.page.scss'],
})
export class Loading5Page implements OnInit {
    list: Array<any>;
    isLoading = true;

    constructor(private service: Loading5Service) {
        this.list = this.service.getList();
    }


    ngOnInit() {
    }

    onToggle() {
        this.isLoading = !this.isLoading;
    }

}
