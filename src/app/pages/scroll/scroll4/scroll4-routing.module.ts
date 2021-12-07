import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Scroll4Page } from './scroll4.page';

const routes: Routes = [
  {
    path: '',
    component: Scroll4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Scroll4PageRoutingModule {}
