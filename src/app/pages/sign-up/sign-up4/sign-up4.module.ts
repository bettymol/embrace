import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignUp4PageRoutingModule } from './sign-up4-routing.module';

import { SignUp4Page } from './sign-up4.page';
import {ComponentsModule} from '../../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SignUp4PageRoutingModule,
        ComponentsModule
    ],
  declarations: [SignUp4Page]
})
export class SignUp4PageModule {}
