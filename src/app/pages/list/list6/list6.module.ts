import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { List6PageRoutingModule } from './list6-routing.module';

import { List6Page } from './list6.page';
import {ComponentsModule} from '../../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        List6PageRoutingModule,
        ComponentsModule
    ],
  declarations: [List6Page]
})
export class List6PageModule {}
