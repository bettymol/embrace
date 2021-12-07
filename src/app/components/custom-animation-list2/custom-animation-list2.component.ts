import {Component, Input} from '@angular/core';

@Component({
  selector: 'custom-animation-list2',
  templateUrl: './custom-animation-list2.component.html',
  styleUrls: ['./custom-animation-list2.component.scss'],
})
export class CustomAnimationList2Component {
  @Input() animationClassName: string;
  @Input() list: Array<any>;
  sList = [1, 2, 3, 4, 5];
  constructor() { }

}
