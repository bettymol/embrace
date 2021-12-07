import {Component, OnInit} from '@angular/core';
import {timer} from 'rxjs';
import {Card5Service} from './card5.service';

@Component({
    selector: 'app-card5',
    templateUrl: './card5.page.html',
    styleUrls: ['./card5.page.scss'],
})
export class Card5Page implements OnInit {
    list: Array<any>;
    isLoading = true;

    constructor(private service: Card5Service) {
        this.list = this.service.getList();
    }

    ngOnInit() {
        timer(2000).subscribe(r => {
            this.isLoading = !this.isLoading;
        });
    }
}
