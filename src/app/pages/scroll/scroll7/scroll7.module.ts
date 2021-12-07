import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Scroll7PageRoutingModule } from './scroll7-routing.module';

import { Scroll7Page } from './scroll7.page';
import {ComponentsModule} from '../../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        Scroll7PageRoutingModule,
        ComponentsModule
    ],
  declarations: [Scroll7Page]
})
export class Scroll7PageModule {}
