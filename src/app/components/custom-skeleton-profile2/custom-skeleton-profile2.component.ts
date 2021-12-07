import {Component, Input} from '@angular/core';

@Component({
  selector: 'custom-skeleton-profile2',
  templateUrl: './custom-skeleton-profile2.component.html',
  styleUrls: ['./custom-skeleton-profile2.component.scss'],
})
export class CustomSkeletonProfile2Component {
  @Input() user: any;
  @Input() list: any;
  constructor() { }
}
