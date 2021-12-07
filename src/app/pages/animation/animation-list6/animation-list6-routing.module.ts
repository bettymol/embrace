import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnimationList6Page } from './animation-list6.page';

const routes: Routes = [
  {
    path: '',
    component: AnimationList6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimationList6PageRoutingModule {}
