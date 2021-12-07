import {Component, Input} from '@angular/core';

@Component({
  selector: 'custom-skeleton-profile3',
  templateUrl: './custom-skeleton-profile3.component.html',
  styleUrls: ['./custom-skeleton-profile3.component.scss'],
})
export class CustomSkeletonProfile3Component {
  @Input() user: any;
  @Input() list: any;
  constructor() { }

}
