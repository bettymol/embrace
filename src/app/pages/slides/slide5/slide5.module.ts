import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Slide5PageRoutingModule } from './slide5-routing.module';

import { Slide5Page } from './slide5.page';
import {ComponentsModule} from '../../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        Slide5PageRoutingModule,
        ComponentsModule
    ],
  declarations: [Slide5Page]
})
export class Slide5PageModule {}
