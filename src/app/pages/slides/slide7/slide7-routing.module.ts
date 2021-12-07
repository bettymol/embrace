import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Slide7Page } from './slide7.page';

const routes: Routes = [
  {
    path: '',
    component: Slide7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Slide7PageRoutingModule {}
