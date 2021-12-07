import {timer} from 'rxjs';
import {Injectable} from '@angular/core';
import {AlertProvider, LoadingProvider} from '../../shared/providers';
import {FormGroup} from '@angular/forms';

@Injectable({providedIn: 'root'})
export class LoginService {
    constructor(private loadingProvider: LoadingProvider,
                private alertProvider: AlertProvider) {
    }

    async onLogin(form: FormGroup) {
        // const username = form.controls.email.value;
        // const pwd = form.controls.pwd.value;
        const loader = await this.loadingProvider.create();
        await loader.present();
        timer(2000).subscribe(r => {
            loader.dismiss().then(() => {
                this.alertProvider.present('Login success!');
            });
        }, error => loader.dismiss().then(() => this.alertProvider.present(error)));
    }
}
