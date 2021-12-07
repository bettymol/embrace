import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Loading3Page } from './loading3.page';

const routes: Routes = [
  {
    path: '',
    component: Loading3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Loading3PageRoutingModule {}
