import {Component, OnInit, ViewChild} from '@angular/core';
import {IonSlides} from '@ionic/angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../login.service';

@Component({
    selector: 'app-login7',
    templateUrl: './login7.page.html',
    styleUrls: ['./login7.page.scss'],
})
export class Login7Page implements OnInit {
    @ViewChild(IonSlides, {static: true}) slides: IonSlides;
    lForm: FormGroup;
    bForm: FormGroup;
    pForm: FormGroup;
    logoList = ['mail', 'md-person', 'phone-portrait'];

    constructor(private formBuilder: FormBuilder,
                private service: LoginService) {
        this.lForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            pwd: ['', [Validators.required, Validators.minLength(6)]],
        });

        this.bForm = this.formBuilder.group({
            name: ['', [Validators.required]],
            pwd: ['', [Validators.required, Validators.minLength(6)]],
        });

        this.pForm = this.formBuilder.group({
            phone: ['', [Validators.required]],
            pwd: ['', [Validators.required, Validators.minLength(6)]],
        });
    }

    ngOnInit() {
    }

    onGo(index) {
        this.slides.slideTo(index, 1000);
    }

    async login() {
        await this.service.onLogin(this.lForm);
    }

}
