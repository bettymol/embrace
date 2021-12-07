import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClaimlistPage } from './claimlist.page';

const routes: Routes = [
  {
    path: '',
    component: ClaimlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClaimlistPageRoutingModule {}
