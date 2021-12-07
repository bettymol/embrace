import { Component, OnInit } from '@angular/core';
import {timer} from 'rxjs';
import {Card7Service} from './card7.service';

@Component({
  selector: 'app-card7',
  templateUrl: './card7.page.html',
  styleUrls: ['./card7.page.scss'],
})
export class Card7Page implements OnInit {
  list: Array<any>;
  isLoading = true;

  constructor(private service: Card7Service) {
    this.list = this.service.getList();
  }

  ngOnInit() {
    timer(2000).subscribe(r => {
      this.isLoading = !this.isLoading;
    });
  }
}
