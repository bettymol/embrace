import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SignUpService} from '../../pages/sign-up/sign-up.service';

@Component({
    selector: 'custom-sign-up2',
    templateUrl: './custom-sign-up2.component.html',
    styleUrls: ['./custom-sign-up2.component.scss'],
})
export class CustomSignUp2Component {
    rForm: FormGroup;
    isShow = false;
    pwd: string;

    constructor(private formBuilder: FormBuilder,
                private service: SignUpService) {
        this.rForm = this.formBuilder.group({
          phone: ['', [Validators.required]],
            pwd: ['', [Validators.required, Validators.minLength(6)]],
        });
    }

    async onSignUp() {
        await this.service.onSignUp(this.rForm);
    }

    onToggle() {
        this.isShow = !this.isShow;
    }
}
