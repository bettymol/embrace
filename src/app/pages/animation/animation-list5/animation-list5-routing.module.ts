import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnimationList5Page } from './animation-list5.page';

const routes: Routes = [
  {
    path: '',
    component: AnimationList5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimationList5PageRoutingModule {}
