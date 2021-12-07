import {Component, OnInit, ViewChild} from '@angular/core';
import {IonContent} from '@ionic/angular';
import {ScrollDetail} from '@ionic/core';
import {Scroll1Service} from './scroll1.service';

@Component({
    selector: 'app-scroll1',
    templateUrl: './scroll1.page.html',
    styleUrls: ['./scroll1.page.scss'],
})
export class Scroll1Page implements OnInit {
    @ViewChild(IonContent, {static: true}) content: IonContent;
    isEnd = false;
    list: Array<any>;

    constructor(private service: Scroll1Service) {
        this.list = this.service.getList();
    }

    ngOnInit() {
    }

    onScroll($event: CustomEvent<ScrollDetail>) {
        if ($event && $event.detail && $event.detail.scrollTop) {
            const scrollTop = $event.detail.scrollTop;
            this.isEnd = scrollTop >= 10;
        }
    }

    goTop() {
        this.content.scrollToTop(2000);
    }

}
