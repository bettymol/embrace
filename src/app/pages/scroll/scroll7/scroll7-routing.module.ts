import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Scroll7Page } from './scroll7.page';

const routes: Routes = [
  {
    path: '',
    component: Scroll7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Scroll7PageRoutingModule {}
