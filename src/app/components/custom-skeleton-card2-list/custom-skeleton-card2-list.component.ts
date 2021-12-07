import {Component, Input} from '@angular/core';

@Component({
  selector: 'custom-skeleton-card2-list',
  templateUrl: './custom-skeleton-card2-list.component.html',
  styleUrls: ['./custom-skeleton-card2-list.component.scss'],
})
export class CustomSkeletonCard2ListComponent {
  @Input() list: Array<any>;
  constructor() { }
}
