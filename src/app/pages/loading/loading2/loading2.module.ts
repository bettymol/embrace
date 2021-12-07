import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Loading2PageRoutingModule } from './loading2-routing.module';

import { Loading2Page } from './loading2.page';
import {ComponentsModule} from '../../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        Loading2PageRoutingModule,
        ComponentsModule
    ],
  declarations: [Loading2Page]
})
export class Loading2PageModule {}
