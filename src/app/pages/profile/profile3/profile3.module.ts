import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Profile3PageRoutingModule } from './profile3-routing.module';

import { Profile3Page } from './profile3.page';
import {ComponentsModule} from '../../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        Profile3PageRoutingModule,
        ComponentsModule
    ],
  declarations: [Profile3Page]
})
export class Profile3PageModule {}
