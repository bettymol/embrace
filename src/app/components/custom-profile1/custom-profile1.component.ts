import {Component, Input} from '@angular/core';

@Component({
  selector: 'custom-profile1',
  templateUrl: './custom-profile1.component.html',
  styleUrls: ['./custom-profile1.component.scss'],
})
export class CustomProfile1Component {
  @Input() user: any;
  @Input() list: any;
  constructor() { }
}
