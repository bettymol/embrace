import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignUp1PageRoutingModule } from './sign-up1-routing.module';

import { SignUp1Page } from './sign-up1.page';
import {ComponentsModule} from '../../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SignUp1PageRoutingModule,
        ComponentsModule
    ],
  declarations: [SignUp1Page]
})
export class SignUp1PageModule {}
