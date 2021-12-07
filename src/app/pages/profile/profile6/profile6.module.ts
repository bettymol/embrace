import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Profile6PageRoutingModule } from './profile6-routing.module';

import { Profile6Page } from './profile6.page';
import {ComponentsModule} from '../../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        Profile6PageRoutingModule,
        ComponentsModule
    ],
  declarations: [Profile6Page]
})
export class Profile6PageModule {}
