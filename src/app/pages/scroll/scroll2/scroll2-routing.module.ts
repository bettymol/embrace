import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Scroll2Page } from './scroll2.page';

const routes: Routes = [
  {
    path: '',
    component: Scroll2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Scroll2PageRoutingModule {}
