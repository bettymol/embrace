import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Loading1PageRoutingModule } from './loading1-routing.module';

import { Loading1Page } from './loading1.page';
import {ComponentsModule} from '../../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        Loading1PageRoutingModule,
        ComponentsModule
    ],
  declarations: [Loading1Page]
})
export class Loading1PageModule {}
