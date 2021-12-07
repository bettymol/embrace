import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DonateDetailsPage } from './donate-details.page';

const routes: Routes = [
  {
    path: '',
    component: DonateDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DonateDetailsPageRoutingModule {}
