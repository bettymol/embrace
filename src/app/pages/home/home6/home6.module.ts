import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Home6PageRoutingModule } from './home6-routing.module';

import { Home6Page } from './home6.page';
import {ComponentsModule} from '../../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        Home6PageRoutingModule,
        ComponentsModule
    ],
  declarations: [Home6Page]
})
export class Home6PageModule {}
