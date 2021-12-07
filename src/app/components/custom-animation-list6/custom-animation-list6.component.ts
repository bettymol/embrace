import {Component, Input} from '@angular/core';
import {AnimationListModel} from '../custom-animation-list1/animation-list.model';

@Component({
  selector: 'custom-animation-list6',
  templateUrl: './custom-animation-list6.component.html',
  styleUrls: ['./custom-animation-list6.component.scss'],
})
export class CustomAnimationList6Component {
  @Input() animationClassName: string;
  @Input() list: Array<AnimationListModel>;
  sList = [1, 2, 3, 4, 5];
  constructor() { }

}
