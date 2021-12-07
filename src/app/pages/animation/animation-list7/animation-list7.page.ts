import { Component, OnInit } from '@angular/core';
import {AnimationListModel} from '../../../components/custom-animation-list1/animation-list.model';
import {AnimationList6Service} from '../animation-list6/animation-list6.service';

@Component({
  selector: 'app-animation-list7',
  templateUrl: './animation-list7.page.html',
  styleUrls: ['./animation-list7.page.scss'],
})
export class AnimationList7Page implements OnInit {
  list: Array<AnimationListModel>;
  animationClassName = 'slide-in-blurred-bottom';

  constructor(private service: AnimationList6Service) {
    this.list = this.service.getList();
  }
  ngOnInit() {
  }

}
