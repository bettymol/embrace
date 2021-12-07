import {Component, Input} from '@angular/core';

@Component({
    selector: 'custom-slide',
    templateUrl: './custom-slide.component.html',
    styleUrls: ['./custom-slide.component.scss'],
})
export class CustomSlideComponent {
    @Input() isCover = false;
    @Input() list: Array<any>;

    constructor() {
    }

    onToggle(item) {
        item.favorite = !item.favorite;
    }

}
