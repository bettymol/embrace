import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnimationList5PageRoutingModule } from './animation-list5-routing.module';

import { AnimationList5Page } from './animation-list5.page';
import {ComponentsModule} from '../../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AnimationList5PageRoutingModule,
        ComponentsModule
    ],
  declarations: [AnimationList5Page]
})
export class AnimationList5PageModule {}
