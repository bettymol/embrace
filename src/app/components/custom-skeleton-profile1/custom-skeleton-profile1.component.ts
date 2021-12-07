import {Component, Input} from '@angular/core';

@Component({
  selector: 'custom-skeleton-profile1',
  templateUrl: './custom-skeleton-profile1.component.html',
  styleUrls: ['./custom-skeleton-profile1.component.scss'],
})
export class CustomSkeletonProfile1Component {
  @Input() user: any;
  @Input() list: any;
  constructor() { }
}
