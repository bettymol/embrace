import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignUp6PageRoutingModule } from './sign-up6-routing.module';

import { SignUp6Page } from './sign-up6.page';
import {ComponentsModule} from '../../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SignUp6PageRoutingModule,
        ComponentsModule
    ],
  declarations: [SignUp6Page]
})
export class SignUp6PageModule {}
