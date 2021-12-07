import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-sign-up3',
    templateUrl: './sign-up3.page.html',
    styleUrls: ['./sign-up3.page.scss'],
})
export class SignUp3Page implements OnInit {
    isShow = false;

    constructor() {
    }

    ngOnInit() {
    }

    onToggle() {
        this.isShow = !this.isShow;
    }

}
