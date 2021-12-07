import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide4',
  templateUrl: './slide4.page.html',
  styleUrls: ['./slide4.page.scss'],
})
export class Slide4Page implements OnInit {
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
