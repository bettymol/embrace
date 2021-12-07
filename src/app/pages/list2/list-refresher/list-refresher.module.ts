import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListRefresherPageRoutingModule } from './list-refresher-routing.module';

import { ListRefresherPage } from './list-refresher.page';
import {ComponentsModule} from '../../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ListRefresherPageRoutingModule,
        ComponentsModule
    ],
  declarations: [ListRefresherPage]
})
export class ListRefresherPageModule {}
