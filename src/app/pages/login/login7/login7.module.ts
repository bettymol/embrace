import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Login7PageRoutingModule } from './login7-routing.module';

import { Login7Page } from './login7.page';
import {ComponentsModule} from '../../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        Login7PageRoutingModule,
        ComponentsModule,
        ReactiveFormsModule
    ],
  declarations: [Login7Page]
})
export class Login7PageModule {}
