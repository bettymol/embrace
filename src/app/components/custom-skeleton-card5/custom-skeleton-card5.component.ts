import {Component, Input} from '@angular/core';

@Component({
  selector: 'custom-skeleton-card5',
  templateUrl: './custom-skeleton-card5.component.html',
  styleUrls: ['./custom-skeleton-card5.component.scss'],
})
export class CustomSkeletonCard5Component  {
  @Input() list: Array<any>;
  constructor() { }
}
