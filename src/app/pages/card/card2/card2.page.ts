import {Component, OnInit} from '@angular/core';
import {Card2Service} from './card2.service';
import {timer} from 'rxjs';

@Component({
    selector: 'app-card2',
    templateUrl: './card2.page.html',
    styleUrls: ['./card2.page.scss'],
})
export class Card2Page implements OnInit {
    list: Array<any>;
    isLoading = true;

    constructor(private service: Card2Service) {
        this.list = this.service.getList();
    }

    ngOnInit() {
        timer(2000).subscribe(r => {
            this.isLoading = !this.isLoading;
        });
    }

}
