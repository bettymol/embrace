import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListCheckboxPageRoutingModule } from './list-checkbox-routing.module';

import { ListCheckboxPage } from './list-checkbox.page';
import {ComponentsModule} from '../../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ListCheckboxPageRoutingModule,
        ComponentsModule
    ],
  declarations: [ListCheckboxPage]
})
export class ListCheckboxPageModule {}
