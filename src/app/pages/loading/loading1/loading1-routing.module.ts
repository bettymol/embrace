import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Loading1Page } from './loading1.page';

const routes: Routes = [
  {
    path: '',
    component: Loading1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Loading1PageRoutingModule {}
