import { Component } from '@angular/core';

@Component({
  selector: 'custom-skeleton-profile',
  templateUrl: './custom-skeleton-profile.component.html',
  styleUrls: ['./custom-skeleton-profile.component.scss'],
})
export class CustomSkeletonProfileComponent  {
  fList = [
    {name: 'Favorite', num: 99},
    {name: 'Follows', num: 233},
    {name: 'Following', num: 999}
  ];
  tList = ['card', 'clock', 'mail', 'pricetags'];
  t2List = [
    {name: 'pay', icon: 'ribbon'},
    {name: 'video', icon: 'videocam'},
    {name: 'review', icon: 'flame'},
    {name: 'bag', icon: 'ios-cart'},

  ];
  constructor() { }
}
