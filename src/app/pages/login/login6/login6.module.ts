import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Login6PageRoutingModule } from './login6-routing.module';

import { Login6Page } from './login6.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        Login6PageRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [Login6Page]
})
export class Login6PageModule {}
