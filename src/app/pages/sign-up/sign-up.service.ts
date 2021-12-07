import {timer} from 'rxjs';
import {Injectable} from '@angular/core';
import {AlertProvider, LoadingProvider} from '../../shared/providers';
import {FormGroup} from '@angular/forms';

@Injectable({providedIn: 'root'})
export class SignUpService {
    constructor(private loadingProvider: LoadingProvider,
                private alertProvider: AlertProvider) {
    }

    async onSignUp(form: FormGroup) {
        const loader = await this.loadingProvider.create();
        await loader.present();
        timer(2000).subscribe(r => {
            loader.dismiss().then(() => {
                this.alertProvider.present('Sign Up success!');
            });
        }, error => loader.dismiss().then(() => this.alertProvider.present(error)));
    }
}
