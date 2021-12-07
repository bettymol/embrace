import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DonateDetailsPageRoutingModule } from './donate-details-routing.module';

import { DonateDetailsPage } from './donate-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DonateDetailsPageRoutingModule
  ],
  declarations: [DonateDetailsPage]
})
export class DonateDetailsPageModule {}
