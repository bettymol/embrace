import {Component, OnInit} from '@angular/core';
import {timer} from 'rxjs';
import {Loading3Service} from './loading3.service';

@Component({
    selector: 'app-loading3',
    templateUrl: './loading3.page.html',
    styleUrls: ['./loading3.page.scss'],
})
export class Loading3Page implements OnInit {
    isLoading = true;
    list: Array<any>;

    constructor(private service: Loading3Service) {
        this.list = this.service.getList();
    }


    ngOnInit() {
        timer(2000).subscribe(r => {
            this.isLoading = false;
        });
    }

}
