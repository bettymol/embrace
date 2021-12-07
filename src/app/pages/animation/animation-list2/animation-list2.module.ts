import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnimationList2PageRoutingModule } from './animation-list2-routing.module';

import { AnimationList2Page } from './animation-list2.page';
import {ComponentsModule} from '../../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AnimationList2PageRoutingModule,
        ComponentsModule
    ],
  declarations: [AnimationList2Page]
})
export class AnimationList2PageModule {}
