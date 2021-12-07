import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SignUpService} from '../../pages/sign-up/sign-up.service';

@Component({
  selector: 'custom-sign-up6',
  templateUrl: './custom-sign-up6.component.html',
  styleUrls: ['./custom-sign-up6.component.scss'],
})
export class CustomSignUp6Component {
  rForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private service: SignUpService) {
    this.rForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      pwd: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  async onSignUp() {
    await this.service.onSignUp(this.rForm);
  }
}
