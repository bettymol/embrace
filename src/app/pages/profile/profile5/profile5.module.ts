import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Profile5PageRoutingModule } from './profile5-routing.module';

import { Profile5Page } from './profile5.page';
import {ComponentsModule} from '../../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        Profile5PageRoutingModule,
        ComponentsModule
    ],
  declarations: [Profile5Page]
})
export class Profile5PageModule {}
