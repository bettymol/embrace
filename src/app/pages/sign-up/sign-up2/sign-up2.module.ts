import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignUp2PageRoutingModule } from './sign-up2-routing.module';

import { SignUp2Page } from './sign-up2.page';
import {ComponentsModule} from '../../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SignUp2PageRoutingModule,
        ComponentsModule
    ],
  declarations: [SignUp2Page]
})
export class SignUp2PageModule {}
