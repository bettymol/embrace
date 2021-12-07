import {Component, OnInit} from '@angular/core';
import {Loading2Service} from './loading2.service';

@Component({
    selector: 'app-loading2',
    templateUrl: './loading2.page.html',
    styleUrls: ['./loading2.page.scss'],
})
export class Loading2Page implements OnInit {
    list: Array<any>;

    constructor(private service: Loading2Service) {
        this.list = this.service.getList();
    }

    ngOnInit() {
    }

    loadData(event) {
        setTimeout(() => {
            this.list = [...this.list, ...this.service.getList()];
            event.target.complete();
            if (this.list.length === 500) {
                event.target.disabled = true;
            }
        }, 2000);
    }

}
