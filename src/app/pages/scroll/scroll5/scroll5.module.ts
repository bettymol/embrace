import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Scroll5PageRoutingModule } from './scroll5-routing.module';

import { Scroll5Page } from './scroll5.page';
import {ComponentsModule} from '../../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        Scroll5PageRoutingModule,
        ComponentsModule
    ],
  declarations: [Scroll5Page]
})
export class Scroll5PageModule {}
