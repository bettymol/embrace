import {Component, OnInit, ViewChild} from '@angular/core';
import {timer} from 'rxjs';
import {Profile5Service} from './profile5.service';
import {IonContent} from '@ionic/angular';
import {ScrollDetail} from '@ionic/core';

@Component({
    selector: 'app-profile5',
    templateUrl: './profile5.page.html',
    styleUrls: ['./profile5.page.scss'],
})
export class Profile5Page implements OnInit {
    user = {
        img: 'assets/images/avatar/7.jpg', name: 'Gabrielle', location: 'Tokyo • Kanda, Chiyoda', backImg: 'assets/images/list/26.jpg'
    };
    list: any;
    isLoading = true;
    @ViewChild(IonContent, {static: true}) content: IonContent;
    isActive = false;
    isEnd = false;

    constructor(private service: Profile5Service) {
        this.list = this.service.getList();
    }

    ngOnInit() {
        timer(2000).subscribe(r => {
            this.isLoading = !this.isLoading;
        });
    }

    onScroll($event: CustomEvent<ScrollDetail>) {
        if ($event && $event.detail && $event.detail.scrollTop) {
            const scrollTop = $event.detail.scrollTop;
            this.isActive = scrollTop >= 300;
            this.isEnd = scrollTop >= 10;
        }
    }

    goTop() {
        this.content.scrollToTop(2000);
    }
}
