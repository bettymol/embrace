import {Component, Input} from '@angular/core';

@Component({
  selector: 'custom-skeleton-profile6',
  templateUrl: './custom-skeleton-profile6.component.html',
  styleUrls: ['./custom-skeleton-profile6.component.scss'],
})
export class CustomSkeletonProfile6Component  {
  @Input() user: any;
  @Input() list: any;
  constructor() { }
}
