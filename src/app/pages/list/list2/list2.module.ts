import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { List2PageRoutingModule } from './list2-routing.module';

import { List2Page } from './list2.page';
import {ComponentsModule} from '../../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        List2PageRoutingModule,
        ComponentsModule
    ],
  declarations: [List2Page]
})
export class List2PageModule {}
