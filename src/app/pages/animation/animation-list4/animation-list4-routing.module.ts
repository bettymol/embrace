import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnimationList4Page } from './animation-list4.page';

const routes: Routes = [
  {
    path: '',
    component: AnimationList4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimationList4PageRoutingModule {}
