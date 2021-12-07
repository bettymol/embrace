import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../../pages/login/login.service';

@Component({
    selector: 'custom-login3',
    templateUrl: './custom-login3.component.html',
    styleUrls: ['./custom-login3.component.scss'],
})
export class CustomLogin3Component {
    lForm: FormGroup;
    logoList = ['logo-instagram', 'logo-facebook', 'logo-twitter'];
    animationClass = 'bounce-in-fwd';

    constructor(private formBuilder: FormBuilder,
                private service: LoginService) {
        this.lForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            pwd: ['', [Validators.required, Validators.minLength(6)]],
        });
    }

    async login() {
        await this.service.onLogin(this.lForm);
    }

}
