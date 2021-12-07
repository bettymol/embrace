import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Loading6PageRoutingModule } from './loading6-routing.module';

import { Loading6Page } from './loading6.page';
import {ComponentsModule} from '../../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        Loading6PageRoutingModule,
        ComponentsModule
    ],
  declarations: [Loading6Page]
})
export class Loading6PageModule {}
