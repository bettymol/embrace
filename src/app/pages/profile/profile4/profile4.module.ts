import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Profile4PageRoutingModule } from './profile4-routing.module';

import { Profile4Page } from './profile4.page';
import {ComponentsModule} from '../../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        Profile4PageRoutingModule,
        ComponentsModule
    ],
  declarations: [Profile4Page]
})
export class Profile4PageModule {}
