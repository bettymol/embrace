import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Loading4PageRoutingModule } from './loading4-routing.module';

import { Loading4Page } from './loading4.page';
import {ComponentsModule} from '../../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        Loading4PageRoutingModule,
        ComponentsModule
    ],
  declarations: [Loading4Page]
})
export class Loading4PageModule {}
