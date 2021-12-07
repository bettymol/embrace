import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../login.service';

@Component({
    selector: 'app-login2',
    templateUrl: './login2.page.html',
    styleUrls: ['./login2.page.scss'],
})
export class Login2Page implements OnInit {
    lForm: FormGroup;
    logoList = ['logo-instagram', 'logo-pinterest', 'logo-twitter'];
    animationClass = 'bounce-in-fwd';

    constructor(private formBuilder: FormBuilder,
                private service: LoginService) {
        this.lForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            pwd: ['', [Validators.required, Validators.minLength(6)]],
        });
    }

    ngOnInit() {
    }

    async login() {
        await this.service.onLogin(this.lForm);
    }


}
