import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SignUpService} from '../../pages/sign-up/sign-up.service';

@Component({
    selector: 'custom-sign-up1',
    templateUrl: './custom-sign-up1.component.html',
    styleUrls: ['./custom-sign-up1.component.scss'],
})
export class CustomSignUp1Component {
    rForm: FormGroup;

    constructor(private formBuilder: FormBuilder,
                private service: SignUpService) {
        this.rForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            name: ['', [Validators.required, Validators.minLength(3)]],
            pwd: ['', [Validators.required, Validators.minLength(6)]],
        });
    }

    async onSignUp() {
        await this.service.onSignUp(this.rForm);
    }

}
