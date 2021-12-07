import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Slide4Page } from './slide4.page';

const routes: Routes = [
  {
    path: '',
    component: Slide4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Slide4PageRoutingModule {}
