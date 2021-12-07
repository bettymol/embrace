import { Component, OnInit } from '@angular/core';
import {List5Service} from './list5.service';

@Component({
  selector: 'app-list5',
  templateUrl: './list5.page.html',
  styleUrls: ['./list5.page.scss'],
})
export class List5Page implements OnInit {
  list: Array<any>;

  constructor(private service: List5Service) {
    this.list = this.service.getList();
  }
  ngOnInit() {
  }

}
