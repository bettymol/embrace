import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClaimlistPageRoutingModule } from './claimlist-routing.module';

import { ClaimlistPage } from './claimlist.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClaimlistPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [ClaimlistPage]
})
export class ClaimlistPageModule {}
