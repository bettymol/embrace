import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClaimDetailsPageRoutingModule } from './claim-details-routing.module';

import { ClaimDetailsPage } from './claim-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClaimDetailsPageRoutingModule
  ],
  declarations: [ClaimDetailsPage]
})
export class ClaimDetailsPageModule {}
