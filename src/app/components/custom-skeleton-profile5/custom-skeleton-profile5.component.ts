import {Component, Input} from '@angular/core';

@Component({
  selector: 'custom-skeleton-profile5',
  templateUrl: './custom-skeleton-profile5.component.html',
  styleUrls: ['./custom-skeleton-profile5.component.scss'],
})
export class CustomSkeletonProfile5Component {
  @Input() user: any;
  @Input() list: any;
  constructor() { }
}
