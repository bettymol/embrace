import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Login5PageRoutingModule } from './login5-routing.module';

import { Login5Page } from './login5.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        Login5PageRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [Login5Page]
})
export class Login5PageModule {}
