import { Component, OnInit } from '@angular/core';
import {AnimationListModel} from '../../../components/custom-animation-list1/animation-list.model';
import {AnimationList3Service} from './animation-list3.service';

@Component({
  selector: 'app-animation-list3',
  templateUrl: './animation-list3.page.html',
  styleUrls: ['./animation-list3.page.scss'],
})
export class AnimationList3Page implements OnInit {
  list: Array<AnimationListModel>;
  animationClassName = 'slide-in-left';

  constructor(private service: AnimationList3Service) {
    this.list = this.service.getList();
  }

  ngOnInit() {
  }

}
