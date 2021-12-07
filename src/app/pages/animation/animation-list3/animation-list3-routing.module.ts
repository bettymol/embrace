import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnimationList3Page } from './animation-list3.page';

const routes: Routes = [
  {
    path: '',
    component: AnimationList3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimationList3PageRoutingModule {}
