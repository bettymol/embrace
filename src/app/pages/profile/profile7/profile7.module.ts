import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Profile7PageRoutingModule } from './profile7-routing.module';

import { Profile7Page } from './profile7.page';
import {ComponentsModule} from '../../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        Profile7PageRoutingModule,
        ComponentsModule
    ],
  declarations: [Profile7Page]
})
export class Profile7PageModule {}
