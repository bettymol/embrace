import {Component, Input} from '@angular/core';

@Component({
  selector: 'custom-card7',
  templateUrl: './custom-card7.component.html',
  styleUrls: ['./custom-card7.component.scss'],
})
export class CustomCard7Component {
  @Input() list: Array<any>;
  constructor() { }

}
