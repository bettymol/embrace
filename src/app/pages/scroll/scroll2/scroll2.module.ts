import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Scroll2PageRoutingModule } from './scroll2-routing.module';

import { Scroll2Page } from './scroll2.page';
import {ComponentsModule} from '../../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        Scroll2PageRoutingModule,
        ComponentsModule
    ],
  declarations: [Scroll2Page]
})
export class Scroll2PageModule {}
