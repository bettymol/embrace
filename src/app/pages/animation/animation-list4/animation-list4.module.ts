import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnimationList4PageRoutingModule } from './animation-list4-routing.module';

import { AnimationList4Page } from './animation-list4.page';
import {ComponentsModule} from '../../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AnimationList4PageRoutingModule,
        ComponentsModule
    ],
  declarations: [AnimationList4Page]
})
export class AnimationList4PageModule {}
