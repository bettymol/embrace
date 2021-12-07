import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Scroll6Page } from './scroll6.page';

const routes: Routes = [
  {
    path: '',
    component: Scroll6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Scroll6PageRoutingModule {}
