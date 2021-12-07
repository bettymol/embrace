import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnimationList7PageRoutingModule } from './animation-list7-routing.module';

import { AnimationList7Page } from './animation-list7.page';
import {ComponentsModule} from '../../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AnimationList7PageRoutingModule,
        ComponentsModule
    ],
  declarations: [AnimationList7Page]
})
export class AnimationList7PageModule {}
