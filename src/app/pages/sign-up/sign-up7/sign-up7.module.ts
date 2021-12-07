import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignUp7PageRoutingModule } from './sign-up7-routing.module';

import { SignUp7Page } from './sign-up7.page';
import {ComponentsModule} from '../../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SignUp7PageRoutingModule,
        ComponentsModule
    ],
  declarations: [SignUp7Page]
})
export class SignUp7PageModule {}
