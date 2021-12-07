import {Component, OnInit} from '@angular/core';
import {Card1Service} from './card1.service';
import {CardModel} from '../../../components/custom-card1/card.model';
import {timer} from 'rxjs';

@Component({
    selector: 'app-card1',
    templateUrl: './card1.page.html',
    styleUrls: ['./card1.page.scss'],
})
export class Card1Page implements OnInit {
    isLoading = true;
    list: Array<CardModel>;

    constructor(private service: Card1Service) {
        this.list = this.service.getList();
    }


    ngOnInit() {
        timer(3000).subscribe(r => {
            this.isLoading = !this.isLoading;
        });
    }

}
