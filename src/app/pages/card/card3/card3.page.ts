import { Component, OnInit } from '@angular/core';
import {timer} from 'rxjs';
import {Card3Service} from './card3.service';

@Component({
  selector: 'app-card3',
  templateUrl: './card3.page.html',
  styleUrls: ['./card3.page.scss'],
})
export class Card3Page implements OnInit {
  list: Array<any>;
  isLoading = true;

  constructor(private service: Card3Service) {
    this.list = this.service.getList();
  }

  ngOnInit() {
    timer(2000).subscribe(r => {
      this.isLoading = !this.isLoading;
    });
  }

}
