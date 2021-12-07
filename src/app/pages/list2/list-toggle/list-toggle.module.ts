import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListTogglePageRoutingModule } from './list-toggle-routing.module';

import { ListTogglePage } from './list-toggle.page';
import {ComponentsModule} from '../../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ListTogglePageRoutingModule,
        ComponentsModule
    ],
  declarations: [ListTogglePage]
})
export class ListTogglePageModule {}
