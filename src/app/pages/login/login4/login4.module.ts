import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Login4PageRoutingModule } from './login4-routing.module';

import { Login4Page } from './login4.page';
import {ComponentsModule} from '../../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        Login4PageRoutingModule,
        ComponentsModule
    ],
  declarations: [Login4Page]
})
export class Login4PageModule {}
