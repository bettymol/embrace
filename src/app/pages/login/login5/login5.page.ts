import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../login.service';
import {interval, Subscription} from 'rxjs';

@Component({
    selector: 'app-login5',
    templateUrl: './login5.page.html',
    styleUrls: ['./login5.page.scss'],
})
export class Login5Page implements OnInit {
    lForm: FormGroup;
    isSend = false;
    seconds = 60;
    interval: Subscription;

    constructor(private formBuilder: FormBuilder,
                private service: LoginService) {
        this.lForm = this.formBuilder.group({
            phone: ['', [Validators.required]],
            code: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]],
        });
    }

    ngOnInit() {
    }

    async login() {
        this.interval.unsubscribe();
        this.isSend = false;
        this.seconds = 60;
    }

    onSend() {
        this.isSend = true;
        this.interval = interval(1000).subscribe(num => {
            this.seconds = --this.seconds;
            if (this.seconds === 0) {
                this.isSend = false;
            }
        });

    }

}
