import {Component, OnInit} from '@angular/core';
import {timer} from 'rxjs';
import {Card6Service} from './card6.service';

@Component({
    selector: 'app-card6',
    templateUrl: './card6.page.html',
    styleUrls: ['./card6.page.scss'],
})
export class Card6Page implements OnInit {
    list: Array<any>;
    isLoading = true;

    constructor(private service: Card6Service) {
        this.list = this.service.getList();
    }

    ngOnInit() {
        timer(2000).subscribe(r => {
            this.isLoading = !this.isLoading;
        });
    }

}
