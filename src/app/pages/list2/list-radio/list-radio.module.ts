import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListRadioPageRoutingModule } from './list-radio-routing.module';

import { ListRadioPage } from './list-radio.page';
import {ComponentsModule} from '../../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ListRadioPageRoutingModule,
        ComponentsModule
    ],
  declarations: [ListRadioPage]
})
export class ListRadioPageModule {}
