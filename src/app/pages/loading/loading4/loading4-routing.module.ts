import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Loading4Page } from './loading4.page';

const routes: Routes = [
  {
    path: '',
    component: Loading4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Loading4PageRoutingModule {}
