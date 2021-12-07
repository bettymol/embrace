import {Component, Input} from '@angular/core';

@Component({
  selector: 'custom-profile4',
  templateUrl: './custom-profile4.component.html',
  styleUrls: ['./custom-profile4.component.scss'],
})
export class CustomProfile4Component {
  @Input() user: any;
  @Input() list: any;
  @Input() list1: any;
  @Input() list2: any;
  constructor() { }
}
