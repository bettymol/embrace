import {Component, Input} from '@angular/core';

@Component({
    selector: 'custom-profile7',
    templateUrl: './custom-profile7.component.html',
    styleUrls: ['./custom-profile7.component.scss'],
})
export class CustomProfile7Component {
    @Input() selectType: string;
    @Input() user: any;
    @Input() fList: any;
    @Input() friendList: any;
    @Input() gList: any;
    img = 'assets/images/profile/6.jpg';

    constructor() {
    }

}
