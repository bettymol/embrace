import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListVirtualScrollPageRoutingModule } from './list-virtual-scroll-routing.module';

import { ListVirtualScrollPage } from './list-virtual-scroll.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListVirtualScrollPageRoutingModule
  ],
  declarations: [ListVirtualScrollPage]
})
export class ListVirtualScrollPageModule {}
