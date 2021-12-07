import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Loading7PageRoutingModule } from './loading7-routing.module';

import { Loading7Page } from './loading7.page';
import {ComponentsModule} from '../../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        Loading7PageRoutingModule,
        ComponentsModule
    ],
  declarations: [Loading7Page]
})
export class Loading7PageModule {}
