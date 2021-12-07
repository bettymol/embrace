import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Profile1PageRoutingModule } from './profile1-routing.module';

import { Profile1Page } from './profile1.page';
import {ComponentsModule} from '../../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        Profile1PageRoutingModule,
        ComponentsModule
    ],
  declarations: [Profile1Page]
})
export class Profile1PageModule {}
