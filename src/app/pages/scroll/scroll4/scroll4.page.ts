import {Component, OnInit, ViewChild} from '@angular/core';
import {ScrollDetail} from '@ionic/core';
import {IonContent, ModalController} from '@ionic/angular';
import {Scroll4Service} from './scroll4.service';
import {PhotosPage} from '../../photos/photos.page';
import {List4Service} from '../../list/list4/list4.service';

@Component({
    selector: 'app-scroll4',
    templateUrl: './scroll4.page.html',
    styleUrls: ['./scroll4.page.scss'],
})
export class Scroll4Page implements OnInit {
    @ViewChild(IonContent, {static: true}) content: IonContent;
    isActive = false;
    user: any;
    list: any;

    constructor(private service: Scroll4Service,
                private service1: List4Service,
                private modalCtrl: ModalController) {
        this.user = this.service.getUser();
        this.list = this.service1.getList();
    }

    ngOnInit() {
    }

    onScroll($event: CustomEvent<ScrollDetail>) {
        if ($event && $event.detail && $event.detail.scrollTop) {
            const scrollTop = $event.detail.scrollTop;
            this.isActive = scrollTop >= 200;
        }
    }

    async onPhoto(event) {
        const modal = await this.modalCtrl.create({
            component: PhotosPage,
            componentProps: {name: 'photo'}
        });
        await modal.present();
    }

}
