import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignUp3PageRoutingModule } from './sign-up3-routing.module';

import { SignUp3Page } from './sign-up3.page';
import {ComponentsModule} from '../../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SignUp3PageRoutingModule,
        ComponentsModule
    ],
  declarations: [SignUp3Page]
})
export class SignUp3PageModule {}
