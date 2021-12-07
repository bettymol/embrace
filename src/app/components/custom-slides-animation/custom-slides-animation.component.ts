import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {slideOptsFlip, slidesOptsCoverflow, slidesOptsCube, slidesOptsFade} from './custom-slides-animation-model';
import {IonSlides} from '@ionic/angular';

@Component({
    selector: 'custom-slides-animation',
    templateUrl: './custom-slides-animation.component.html',
    styleUrls: ['./custom-slides-animation.component.scss']

})
export class CustomSlidesAnimationComponent implements OnInit {
    slideOpts: any;
    @Input() isAvatar = false;
    @Input() list: Array<string>;
    @Input() animation = 'Coverflow';
    @Input() isFull = false;
    @Input() pager = true;
    @ViewChild(IonSlides, {static: true}) slides: IonSlides;

    constructor() {
    }

    ngOnInit() {
        switch (this.animation) {
            case 'coverflow':
                this.slideOpts = slidesOptsCoverflow;
                break;
            case 'cube':
                this.slideOpts = slidesOptsCube;
                break;
            case 'fade':
                this.slideOpts = slidesOptsFade;
                break;
            case 'flip':
                this.slideOpts = slideOptsFlip;
                break;
            default:
                this.slideOpts = 'none';
        }
        this.slides.startAutoplay();
    }

}
