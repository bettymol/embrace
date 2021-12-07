import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListSelectPageRoutingModule } from './list-select-routing.module';

import { ListSelectPage } from './list-select.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListSelectPageRoutingModule
  ],
  declarations: [ListSelectPage]
})
export class ListSelectPageModule {}
