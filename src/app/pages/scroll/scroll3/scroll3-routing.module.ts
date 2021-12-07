import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Scroll3Page } from './scroll3.page';

const routes: Routes = [
  {
    path: '',
    component: Scroll3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Scroll3PageRoutingModule {}
