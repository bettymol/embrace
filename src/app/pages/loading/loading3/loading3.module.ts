import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Loading3PageRoutingModule } from './loading3-routing.module';

import { Loading3Page } from './loading3.page';
import {ComponentsModule} from '../../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        Loading3PageRoutingModule,
        ComponentsModule
    ],
  declarations: [Loading3Page]
})
export class Loading3PageModule {}
