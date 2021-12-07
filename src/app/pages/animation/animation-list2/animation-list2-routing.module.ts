import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnimationList2Page } from './animation-list2.page';

const routes: Routes = [
  {
    path: '',
    component: AnimationList2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimationList2PageRoutingModule {}
