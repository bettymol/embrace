import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Scroll1Page } from './scroll1.page';

const routes: Routes = [
  {
    path: '',
    component: Scroll1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Scroll1PageRoutingModule {}
