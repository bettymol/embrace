import {Component, Input} from '@angular/core';

@Component({
    selector: 'custom-animation-list4',
    templateUrl: './custom-animation-list4.component.html',
    styleUrls: ['./custom-animation-list4.component.scss'],
})
export class CustomAnimationList4Component {
    selectedCate = 'Top';
    cateList = ['Top', 'News', 'Recommend', 'Hot'];
    @Input() list: Array<any>;
    @Input() animationClassName: string;
    constructor() {
    }

    onSelect(cateId) {
        this.selectedCate = cateId;
        this.list = this.list.sort(() => Math.random() - 0.5).reverse();
    }
}
