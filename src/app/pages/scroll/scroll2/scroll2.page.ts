import {Component, OnInit, ViewChild} from '@angular/core';
import {IonContent} from '@ionic/angular';
import {ScrollDetail} from '@ionic/core';
import {Scroll2Service} from './scroll2.service';

@Component({
    selector: 'app-scroll2',
    templateUrl: './scroll2.page.html',
    styleUrls: ['./scroll2.page.scss'],
})
export class Scroll2Page implements OnInit {
    @ViewChild(IonContent, {static: true}) content: IonContent;
    isEnd = false;
    list: Array<any>;

    constructor(private service: Scroll2Service) {
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
