import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnimationList1PageRoutingModule } from './animation-list1-routing.module';

import { AnimationList1Page } from './animation-list1.page';
import {ComponentsModule} from '../../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AnimationList1PageRoutingModule,
        ComponentsModule
    ],
  declarations: [AnimationList1Page]
})
export class AnimationList1PageModule {}
