import {Component, Input} from '@angular/core';

@Component({
  selector: 'custom-skeleton-profile4',
  templateUrl: './custom-skeleton-profile4.component.html',
  styleUrls: ['./custom-skeleton-profile4.component.scss'],
})
export class CustomSkeletonProfile4Component {
  @Input() user: any;
  @Input() list: any;
  @Input() list1: any;
  @Input() list2: any;
  constructor() { }
}
