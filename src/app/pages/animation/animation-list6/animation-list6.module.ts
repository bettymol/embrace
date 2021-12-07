import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnimationList6PageRoutingModule } from './animation-list6-routing.module';

import { AnimationList6Page } from './animation-list6.page';
import {ComponentsModule} from '../../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AnimationList6PageRoutingModule,
        ComponentsModule
    ],
  declarations: [AnimationList6Page]
})
export class AnimationList6PageModule {}
