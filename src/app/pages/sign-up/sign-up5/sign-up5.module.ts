import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignUp5PageRoutingModule } from './sign-up5-routing.module';

import { SignUp5Page } from './sign-up5.page';
import {ComponentsModule} from '../../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SignUp5PageRoutingModule,
        ComponentsModule
    ],
  declarations: [SignUp5Page]
})
export class SignUp5PageModule {}
