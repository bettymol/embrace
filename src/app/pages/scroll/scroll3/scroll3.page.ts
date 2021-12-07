import {Component, OnInit, ViewChild} from '@angular/core';
import {IonContent} from '@ionic/angular';
import {ScrollDetail} from '@ionic/core';
import {Scroll3Service} from './scroll3.service';

@Component({
  selector: 'app-scroll3',
  templateUrl: './scroll3.page.html',
  styleUrls: ['./scroll3.page.scss'],
})
export class Scroll3Page implements OnInit {
  @ViewChild(IonContent, {static: true}) content: IonContent;
  isEnd = false;
  list: Array<any>;

  constructor(private service: Scroll3Service) {
    this.list = this.service.getList();
  }

  ngOnInit() {
  }

  onScroll($event: CustomEvent<ScrollDetail>) {
    if ($event && $event.detail && $event.detail.scrollTop) {
      const scrollTop = $event.detail.scrollTop;
      this.isEnd = scrollTop <= 10;
    }
  }

  goBottom() {
    this.content.scrollToBottom(2000);
  }
}
