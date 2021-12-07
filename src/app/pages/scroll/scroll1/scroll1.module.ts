import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Scroll1PageRoutingModule } from './scroll1-routing.module';

import { Scroll1Page } from './scroll1.page';
import {ComponentsModule} from '../../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        Scroll1PageRoutingModule,
        ComponentsModule
    ],
  declarations: [Scroll1Page]
})
export class Scroll1PageModule {}
