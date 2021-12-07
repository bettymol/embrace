import { Component, OnInit } from '@angular/core';
import {AnimationListModel} from '../../../components/custom-animation-list1/animation-list.model';
import {AnimationList4Service} from './animation-list4.service';

@Component({
  selector: 'app-animation-list4',
  templateUrl: './animation-list4.page.html',
  styleUrls: ['./animation-list4.page.scss'],
})
export class AnimationList4Page implements OnInit {
  list: Array<AnimationListModel>;
  animationClassName = 'rotate-in-2-cw';

  constructor(private service: AnimationList4Service) {
    this.list = this.service.getList();
  }
  ngOnInit() {
  }

}
