import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Home2PageRoutingModule } from './home2-routing.module';

import { Home2Page } from './home2.page';
import {ComponentsModule} from '../../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        Home2PageRoutingModule,
        ComponentsModule
    ],
  declarations: [Home2Page]
})
export class Home2PageModule {}
