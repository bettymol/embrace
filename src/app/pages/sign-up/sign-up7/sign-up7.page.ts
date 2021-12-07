import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-sign-up7',
    templateUrl: './sign-up7.page.html',
    styleUrls: ['./sign-up7.page.scss'],
})
export class SignUp7Page implements OnInit {
    img = 'assets/images/profile/5.jpg';
    active = false;

    constructor() {
    }

    ngOnInit() {
    }

    toggle() {
        this.active = !this.active;
    }

}
