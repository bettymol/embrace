import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide3',
  templateUrl: './slide3.page.html',
  styleUrls: ['./slide3.page.scss'],
})
export class Slide3Page implements OnInit {
  list = [
    'assets/images/list/20.jpg',
    'assets/images/list/21.jpg',
    'assets/images/list/22.jpg',
    'assets/images/list/23.jpg',
    'assets/images/list/24.jpg',
    'assets/images/list/25.jpg',
  ];
  constructor() { }

  ngOnInit() {
  }

}
