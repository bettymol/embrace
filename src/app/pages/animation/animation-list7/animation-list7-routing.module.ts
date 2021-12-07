import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnimationList7Page } from './animation-list7.page';

const routes: Routes = [
  {
    path: '',
    component: AnimationList7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimationList7PageRoutingModule {}
