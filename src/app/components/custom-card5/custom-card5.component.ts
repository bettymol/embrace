import {Component, Input} from '@angular/core';

@Component({
  selector: 'custom-card5',
  templateUrl: './custom-card5.component.html',
  styleUrls: ['./custom-card5.component.scss'],
})
export class CustomCard5Component  {
  @Input() list: Array<any>;
  constructor() { }
}
