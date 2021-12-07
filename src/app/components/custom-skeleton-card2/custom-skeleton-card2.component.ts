import {Component, Input} from '@angular/core';

@Component({
  selector: 'custom-skeleton-card2',
  templateUrl: './custom-skeleton-card2.component.html',
  styleUrls: ['./custom-skeleton-card2.component.scss'],
})
export class CustomSkeletonCard2Component {
  @Input() list: Array<any>;
  constructor() { }

}
