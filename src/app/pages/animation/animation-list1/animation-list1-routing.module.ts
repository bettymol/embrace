import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnimationList1Page } from './animation-list1.page';

const routes: Routes = [
  {
    path: '',
    component: AnimationList1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimationList1PageRoutingModule {}
