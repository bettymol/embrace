import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContributePageRoutingModule } from './contribute-routing.module';

import { ContributePage } from './contribute.page';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContributePageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [ContributePage]
})
export class ContributePageModule {}
