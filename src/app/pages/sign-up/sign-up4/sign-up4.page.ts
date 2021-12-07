import {Component, OnInit, ViewChild} from '@angular/core';
import {IonContent} from '@ionic/angular';
import {ScrollDetail} from '@ionic/core';


@Component({
    selector: 'app-sign-up4',
    templateUrl: './sign-up4.page.html',
    styleUrls: ['./sign-up4.page.scss'],
})
export class SignUp4Page implements OnInit {
    isActive = false;
    img = 'assets/images/profile/1.jpg';
    @ViewChild(IonContent, {static: true}) content: IonContent;

    constructor() {
    }

    ngOnInit() {
    }

    onScroll($event: CustomEvent<ScrollDetail>) {
        if ($event && $event.detail && $event.detail.scrollTop) {
            const scrollTop = $event.detail.scrollTop;
            console.log(scrollTop);
            this.isActive = scrollTop >= 300;
        }
    }
}
