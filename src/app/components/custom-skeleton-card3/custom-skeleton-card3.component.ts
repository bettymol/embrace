import {Component, Input} from '@angular/core';

@Component({
  selector: 'custom-skeleton-card3',
  templateUrl: './custom-skeleton-card3.component.html',
  styleUrls: ['./custom-skeleton-card3.component.scss'],
})
export class CustomSkeletonCard3Component {
  @Input() list: Array<any>;
  constructor() { }

}
