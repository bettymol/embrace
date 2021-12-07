import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnimationList3PageRoutingModule } from './animation-list3-routing.module';

import { AnimationList3Page } from './animation-list3.page';
import {ComponentsModule} from '../../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AnimationList3PageRoutingModule,
        ComponentsModule
    ],
  declarations: [AnimationList3Page]
})
export class AnimationList3PageModule {}
