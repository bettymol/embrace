import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
    selector: 'app-photos',
    templateUrl: './photos.page.html',
    styleUrls: ['./photos.page.scss'],
})
export class PhotosPage implements OnInit {
    @Input() name: string;
    list1 = ['assets/images/list/22.jpg', 'assets/images/list/23.jpg',
        'assets/images/list/24.jpg', 'assets/images/list/25.jpg', 'assets/images/list/26.jpg',
        'assets/images/list/27.jpg', 'assets/images/list/28.jpg',
        'assets/images/list/29.jpg', 'assets/images/list/30.jpg',
        'assets/images/list/31.jpg', 'assets/images/list/32.jpg', 'assets/images/list/33.jpg'];
    list = [];
    option = {
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        }
    };

    constructor(private modalCtrl: ModalController) {
    }

    ngOnInit() {
    }

    ionViewDidEnter() {
        this.list = this.list1;
    }

    onClose() {
        this.modalCtrl.dismiss();
    }

}
