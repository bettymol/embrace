import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Loading8PageRoutingModule } from './loading8-routing.module';

import { Loading8Page } from './loading8.page';
import {ComponentsModule} from '../../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        Loading8PageRoutingModule,
        ComponentsModule
    ],
  declarations: [Loading8Page]
})
export class Loading8PageModule {}
