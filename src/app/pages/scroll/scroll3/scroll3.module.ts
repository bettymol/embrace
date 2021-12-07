import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Scroll3PageRoutingModule } from './scroll3-routing.module';

import { Scroll3Page } from './scroll3.page';
import {ComponentsModule} from '../../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        Scroll3PageRoutingModule,
        ComponentsModule
    ],
  declarations: [Scroll3Page]
})
export class Scroll3PageModule {}
