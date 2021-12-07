import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Slide7PageRoutingModule } from './slide7-routing.module';

import { Slide7Page } from './slide7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Slide7PageRoutingModule
  ],
  declarations: [Slide7Page]
})
export class Slide7PageModule {}
