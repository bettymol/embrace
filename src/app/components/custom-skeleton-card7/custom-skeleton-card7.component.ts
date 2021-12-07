import {Component, Input} from '@angular/core';

@Component({
  selector: 'custom-skeleton-card7',
  templateUrl: './custom-skeleton-card7.component.html',
  styleUrls: ['./custom-skeleton-card7.component.scss'],
})
export class CustomSkeletonCard7Component {
  @Input() list: Array<any>;
  constructor() { }
}
