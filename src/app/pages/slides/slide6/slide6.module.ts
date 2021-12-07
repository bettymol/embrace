import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Slide6PageRoutingModule } from './slide6-routing.module';

import { Slide6Page } from './slide6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Slide6PageRoutingModule
  ],
  declarations: [Slide6Page]
})
export class Slide6PageModule {}
