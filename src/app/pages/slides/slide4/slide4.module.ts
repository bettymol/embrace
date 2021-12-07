import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Slide4PageRoutingModule } from './slide4-routing.module';

import { Slide4Page } from './slide4.page';
import {ComponentsModule} from '../../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        Slide4PageRoutingModule,
        ComponentsModule
    ],
  declarations: [Slide4Page]
})
export class Slide4PageModule {}
