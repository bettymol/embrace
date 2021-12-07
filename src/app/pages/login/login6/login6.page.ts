import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../shared/auth.service';
import {AlertProvider, LoadingProvider} from '../../../shared/providers';

@Component({
    selector: 'app-login6',
    templateUrl: './login6.page.html',
    styleUrls: ['./login6.page.scss'],
})
export class Login6Page implements OnInit {
    lForm: FormGroup;
    remember = true;

    constructor(private formBuilder: FormBuilder,
                private authService: AuthService,
                private loadingProvider: LoadingProvider,
                private alertProvider: AlertProvider) {
        this.lForm = this.formBuilder.group({
            email: ['test@gmail.com', [Validators.required, Validators.email]],
            pwd: ['123456', [Validators.required, Validators.minLength(6)]],
        });
    }

    ngOnInit() {
    }

    async login() {
        const email = this.lForm.controls.email.value;
        const pwd = this.lForm.controls.pwd.value;
        const loader = await this.loadingProvider.create();
        await loader.present();
        this.authService.signWithEmail(email, pwd).then(r => loader.dismiss().then(() => {
            if (r) {
                this.authService.user = r.user;
                this.authService.isAuthenticated = true;
                this.alertProvider.present('login success');
            } else {
                this.alertProvider.present('invalid email or password');
            }
        }), error => loader.dismiss().then(() => this.alertProvider.present(error)));
    }

}
