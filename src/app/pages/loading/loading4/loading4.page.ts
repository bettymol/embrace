import {Component, OnInit} from '@angular/core';
import {Loading4Service} from './loading4.service';

@Component({
    selector: 'app-loading4',
    templateUrl: './loading4.page.html',
    styleUrls: ['./loading4.page.scss'],
})
export class Loading4Page implements OnInit {
    isAvatar = true;
    isLoading = true;
    list: Array<any>;

    constructor(private service: Loading4Service) {
        this.list = this.service.getList();
    }

    ngOnInit() {
    }

    onToggle() {
        this.isLoading = !this.isLoading;
    }

    onToggleDisplay() {
        this.isAvatar = !this.isAvatar;
    }

}
