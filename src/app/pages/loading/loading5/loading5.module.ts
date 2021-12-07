import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Loading5PageRoutingModule } from './loading5-routing.module';

import { Loading5Page } from './loading5.page';
import {ComponentsModule} from '../../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        Loading5PageRoutingModule,
        ComponentsModule
    ],
  declarations: [Loading5Page]
})
export class Loading5PageModule {}
