import {Component, OnInit} from '@angular/core';
import {timer} from 'rxjs';
import {Card4Service} from './card4.service';

@Component({
    selector: 'app-card4',
    templateUrl: './card4.page.html',
    styleUrls: ['./card4.page.scss'],
})
export class Card4Page implements OnInit {
    list: Array<any>;
    isLoading = true;

    constructor(private service: Card4Service) {
        this.list = this.service.getList();
    }

    ngOnInit() {
        timer(2000).subscribe(r => {
            this.isLoading = !this.isLoading;
        });
    }
}
